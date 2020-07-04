
L.Control.Messagebox = L.Control.extend({
    options: {
        position: 'topright',
        timeout: 3000
    },

    onAdd: function (map) {
        this._container = L.DomUtil.create('div', 'leaflet-control-messagebox');
        //L.DomEvent.disableClickPropagation(this._container);
        return this._container;
    },

    show: function (message, timeout) {
        var elem = this._container;
        elem.innerHTML = message;
        elem.style.display = 'block';

        timeout = timeout || this.options.timeout;

        if (typeof this.timeoutID == 'number') {
            clearTimeout(this.timeoutID);
        }
        this.timeoutID = setTimeout(function () {
            elem.style.display = 'none';
        }, timeout);
    }
});

L.Map.mergeOptions({
    messagebox: false
});

L.Map.addInitHook(function () {
    if (this.options.messagebox) {
        this.messagebox = new L.Control.Messagebox();
        this.addControl(this.messagebox);
    }
});

L.control.messagebox = function (options) {
    return new L.Control.Messagebox(options);
};


var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:5
}).fitBounds([[17.397129524357542,56.46325014076465],[42.60523270697231,86.79095283121762]]);
var options = { timeout: 5000 }
var box = L.control.messagebox(options).addTo(map);

var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
var layer_OpenStreetMap_0 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    opacity: 1.0,
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19
});
layer_OpenStreetMap_0;
map.addLayer(layer_OpenStreetMap_0);
function pop_greencities_export_1(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Province</th>\
                <td>' + (feature.properties['NAME_1'] !== null ? Autolinker.link(feature.properties['NAME_1'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">City</th>\
                <td>' + (feature.properties['NAME_2'] !== null ? Autolinker.link(feature.properties['NAME_2'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Region</th>\
                <td>' + (feature.properties['NAME_3'] !== null ? Autolinker.link(feature.properties['NAME_3'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Area</th>\
                <td>' + (feature.properties['areaHa'] !== null ? Autolinker.link(feature.properties['areaHa'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Center Coordinates</th>\
                <td>' + (feature.properties['center'] !== null ? Autolinker.link(feature.properties['center'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Greenery Percentage</th>\
                <td>' + (feature.properties['greenamount'] !== null ? Autolinker.link(feature.properties['greenamount'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_greencities_export_1_0(feature) {
    if (feature.properties['greenamount'] >= 0.000000 && feature.properties['greenamount'] <= 10.945455 ) {
        return {
        pane: 'pane_greencities_export_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(68,1,84,1.0)',
        interactive: true,
    }
    }
    if (feature.properties['greenamount'] >= 10.945455 && feature.properties['greenamount'] <= 21.890909 ) {
        return {
        pane: 'pane_greencities_export_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(70,44,123,1.0)',
        interactive: true,
    }
    }
    if (feature.properties['greenamount'] >= 21.890909 && feature.properties['greenamount'] <= 32.836364 ) {
        return {
        pane: 'pane_greencities_export_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(58,82,139,1.0)',
        interactive: true,
    }
    }
    if (feature.properties['greenamount'] >= 32.836364 && feature.properties['greenamount'] <= 43.781818 ) {
        return {
        pane: 'pane_greencities_export_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(43,114,142,1.0)',
        interactive: true,
    }
    }
    if (feature.properties['greenamount'] >= 43.781818 && feature.properties['greenamount'] <= 54.727273 ) {
        return {
        pane: 'pane_greencities_export_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(32,144,141,1.0)',
        interactive: true,
    }
    }
    if (feature.properties['greenamount'] >= 54.727273 && feature.properties['greenamount'] <= 65.672728 ) {
        return {
        pane: 'pane_greencities_export_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(39,174,128,1.0)',
        interactive: true,
    }
    }
    if (feature.properties['greenamount'] >= 65.672728 && feature.properties['greenamount'] <= 76.618182 ) {
        return {
        pane: 'pane_greencities_export_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(93,201,98,1.0)',
        interactive: true,
    }
    }
    if (feature.properties['greenamount'] >= 76.618182 && feature.properties['greenamount'] <= 87.563637 ) {
        return {
        pane: 'pane_greencities_export_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(171,220,50,1.0)',
        interactive: true,
    }
    }
    if (feature.properties['greenamount'] >= 87.563637 && feature.properties['greenamount'] <= 98.509091 ) {
        return {
        pane: 'pane_greencities_export_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(253,231,37,1.0)',
        interactive: true,
    }
    }
}
map.createPane('pane_greencities_export_1');
map.getPane('pane_greencities_export_1').style.zIndex = 401;
map.getPane('pane_greencities_export_1').style['mix-blend-mode'] = 'normal';
var layer_greencities_export_1 = new L.geoJson(json_greencities_export_1, {
    attribution: '',
    interactive: true,
    dataVar: 'json_greencities_export_1',
    layerName: 'layer_greencities_export_1',
    pane: 'pane_greencities_export_1',
    onEachFeature: pop_greencities_export_1,
    style: style_greencities_export_1_0,
});
bounds_group.addLayer(layer_greencities_export_1);
map.addLayer(layer_greencities_export_1);
setBounds();
var i = 0;
layer_greencities_export_1.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['NAME_3'] !== null?String('<div style="color: #000000; font-size: 10pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['NAME_3']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_greencities_export_1'});
    labels.push(layer);
    totalMarkers += 1;
      layer.added = true;
      addLabel(layer, i);
      i++;
});
resetLabels([layer_greencities_export_1]);
map.on("zoomend", function(){
    resetLabels([layer_greencities_export_1]);
});
map.on("layeradd", function(){
    resetLabels([layer_greencities_export_1]);
});
map.on("layerremove", function(){
    resetLabels([layer_greencities_export_1]);
});

box.show( 'Click over the area to show its greenery %, and other metadata' );
