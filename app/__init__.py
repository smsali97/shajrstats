import json
import flask
from flask import jsonify
import numpy as np
import pandas as pd
from flask_cors import CORS, cross_origin
import math

app = flask.Flask(__name__,template_folder='templates')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


color_index = 0
MAX_COLOR_RANGE = 14

@app.route("/")
def index():
    return flask.render_template("index.html")


@app.route("/data")
def data():
    color_index = 0
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "static/data", "greencities_export.geojson")
    jdata = json.load(open(json_url))["features"]
    mydata = {}
    # NAME 3
    for ind, data in enumerate(jdata):
        mydata[data['id']] = {}
        mydata[data['id']]["country"] = data['properties']['NAME_0']
        mydata[data['id']]["province"] = data['properties']['NAME_1']
        mydata[data['id']]["city"] = data['properties']['NAME_2']
        mydata[data['id']]["district"] = data['properties']['NAME_3']
        mydata[data['id']]["greenAmount"] = round(data['properties']['greenamount'],3)

    df = pd.DataFrame(mydata)
    df = df.T
    df = df.where(pd.notnull(df), None)
    df = df.fillna(0)

    processed_list = []
    sum_provinces = sum([df[df['province']==province].greenAmount.mean() for province in df.province.unique()])
    sum_provinces = 1
    for province in df.province.unique():

        prov_d = {}
        val = df[df['province']==province].greenAmount.mean() / sum_provinces * 100
        if math.isnan(val): val = 0
        color_index += 1
        prov_d["colorIndex"] = color_index % MAX_COLOR_RANGE
        prov_d["value"] = val
        prov_d["label"] = province
        processed_list.append(prov_d)
        
        city_l = []
        prov_d["children"] = city_l
        x = ([df[df['province']==province].greenAmount.mean() for city in df[df['province']==province].city.unique()])
        
        sum_cities = sum(x)
        sum_cities = 1
        color_index = 0
        for city in df[df['province']==province].city.unique():
            city_d = {}
            val = round(100 * df[(df['province']==province) & (df['city']==city)].greenAmount.mean() / sum_cities,3)
            if math.isnan(val): val = 0
            color_index += 1
            city_d["colorIndex"] = color_index % MAX_COLOR_RANGE
            city_d["value"] = val
            city_d["label"] = city
            city_l.append(city_d)

            district_l = []
            city_d["children"] = district_l
            sum_districts = sum([df[(df['province']==province) & (df['city']==city) & (df['district']==district)].greenAmount.mean() for district in df[df['city']==city].district.unique()])
            sum_districts = 1
            for district in df[df['city']==city].district.unique():
                district_d = {}
                val = round(100 * df[(df['province']==province) & (df['city']==city) & (df['district'] == district)].greenAmount.mean() / sum_districts,3)
                if math.isnan(val): val = 0
                district_d["value"] = val
                district_d["label"] = district
                color_index += 1
                district_d["colorIndex"] = color_index % MAX_COLOR_RANGE
                district_l.append(district_d)
    d = {"label": "Pakistan", "children":processed_list}
    print(d)
    # return (json.dumps(d))
    # return jsonify(processed_list)
    return jsonify(d)
    # return jsonify(processed_list)
    

if __name__ == "__main__":
    import os

    port = 8000

    # Open a web browser pointing at the app.
    os.system("open http://localhost:{0}".format(port))

    # Set up the development server on port 8000.
    app.debug = True
    app.run(port=port)
