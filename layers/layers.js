var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_op_ie_inact_1 = new ol.format.GeoJSON();
var features_op_ie_inact_1 = format_op_ie_inact_1.readFeatures(json_op_ie_inact_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_op_ie_inact_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_op_ie_inact_1.addFeatures(features_op_ie_inact_1);
var lyr_op_ie_inact_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_op_ie_inact_1, 
                style: style_op_ie_inact_1,
                popuplayertitle: "op_ie_inact",
                interactive: true,
    title: 'op_ie_inact<br />\
    <img src="styles/legend/op_ie_inact_1_0.png" /> 07H01247<br />\
    <img src="styles/legend/op_ie_inact_1_1.png" /> 09H03041<br />\
    <img src="styles/legend/op_ie_inact_1_2.png" /> 09H04099<br />\
    <img src="styles/legend/op_ie_inact_1_3.png" /> 09H04174<br />\
    <img src="styles/legend/op_ie_inact_1_4.png" /> 09H04814<br />\
    <img src="styles/legend/op_ie_inact_1_5.png" /> 09H05598<br />\
    <img src="styles/legend/op_ie_inact_1_6.png" /> 11H01176<br />\
    <img src="styles/legend/op_ie_inact_1_7.png" /> 11H01200<br />\
    <img src="styles/legend/op_ie_inact_1_8.png" /> 12H00370<br />\
    <img src="styles/legend/op_ie_inact_1_9.png" /> 12H00376<br />\
    <img src="styles/legend/op_ie_inact_1_10.png" /> 12H00403<br />\
    <img src="styles/legend/op_ie_inact_1_11.png" /> 12H00446<br />\
    <img src="styles/legend/op_ie_inact_1_12.png" /> 13H00156<br />\
    <img src="styles/legend/op_ie_inact_1_13.png" /> 13H00545<br />\
    <img src="styles/legend/op_ie_inact_1_14.png" /> 17H01876<br />\
    <img src="styles/legend/op_ie_inact_1_15.png" /> 24H00072<br />'
        });
var format_ie_at_220425_2 = new ol.format.GeoJSON();
var features_ie_at_220425_2 = format_ie_at_220425_2.readFeatures(json_ie_at_220425_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ie_at_220425_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ie_at_220425_2.addFeatures(features_ie_at_220425_2);
var lyr_ie_at_220425_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ie_at_220425_2, 
                style: style_ie_at_220425_2,
                popuplayertitle: "ie_at_220425",
                interactive: true,
    title: 'ie_at_220425<br />\
    <img src="styles/legend/ie_at_220425_2_0.png" /> 07H01247<br />\
    <img src="styles/legend/ie_at_220425_2_1.png" /> 09H03041<br />\
    <img src="styles/legend/ie_at_220425_2_2.png" /> 09H04099<br />\
    <img src="styles/legend/ie_at_220425_2_3.png" /> 09H04174<br />\
    <img src="styles/legend/ie_at_220425_2_4.png" /> 09H04814<br />\
    <img src="styles/legend/ie_at_220425_2_5.png" /> 09H05598<br />\
    <img src="styles/legend/ie_at_220425_2_6.png" /> 11H01176<br />\
    <img src="styles/legend/ie_at_220425_2_7.png" /> 11H01200<br />\
    <img src="styles/legend/ie_at_220425_2_8.png" /> 12H00370<br />\
    <img src="styles/legend/ie_at_220425_2_9.png" /> 12H00376<br />\
    <img src="styles/legend/ie_at_220425_2_10.png" /> 12H00403<br />\
    <img src="styles/legend/ie_at_220425_2_11.png" /> 12H00446<br />\
    <img src="styles/legend/ie_at_220425_2_12.png" /> 13H00156<br />\
    <img src="styles/legend/ie_at_220425_2_13.png" /> 13H00545<br />\
    <img src="styles/legend/ie_at_220425_2_14.png" /> 17H01876<br />\
    <img src="styles/legend/ie_at_220425_2_15.png" /> 24H00072<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_op_ie_inact_1.setVisible(true);lyr_ie_at_220425_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_op_ie_inact_1,lyr_ie_at_220425_2];
lyr_op_ie_inact_1.set('fieldAliases', {'amie_at': 'amie_at', 'ie_at': 'ie_at', 'no_ee': 'no_ee', 'soste_at': 'soste_at', 'zona_at': 'zona_at', 'distrito_a': 'distrito_a', 'prov_at': 'prov_at', 'cant_at': 'cant_at', 'parroq_at': 'parroq_at', 'x_at': 'x_at', 'y_at': 'y_at', 'amie_2': 'amie_2', 'ie_2': 'ie_2', 'estado_2': 'estado_2', 'soste_2': 'soste_2', 'oferta1_2': 'oferta1_2', 'oferta2_2': 'oferta2_2', 'oferta3_2': 'oferta3_2', 'oferta4_2': 'oferta4_2', 'lengua_2': 'lengua_2', 'regimen_2': 'regimen_2', 'jurisd_2': 'jurisd_2', 'zona_2': 'zona_2', 'distrito_2': 'distrito_2', 'prov_2': 'prov_2', 'cant_2': 'cant_2', 'parroq_2': 'parroq_2', 'x_2': 'x_2', 'y_2': 'y_2', 'dist_at_2': 'dist_at_2', 'no_opcione': 'no_opcione', });
lyr_ie_at_220425_2.set('fieldAliases', {'amie_at': 'amie_at', 'ie_at': 'ie_at', 'no_ee': 'no_ee', 'soste_at': 'soste_at', 'zona_at': 'zona_at', 'distrito_a': 'distrito_a', 'prov_at': 'prov_at', 'cant_at': 'cant_at', 'parroq_at': 'parroq_at', 'x_at': 'x_at', 'y_at': 'y_at', });
lyr_op_ie_inact_1.set('fieldImages', {'amie_at': 'TextEdit', 'ie_at': 'TextEdit', 'no_ee': 'TextEdit', 'soste_at': 'TextEdit', 'zona_at': 'TextEdit', 'distrito_a': 'TextEdit', 'prov_at': 'TextEdit', 'cant_at': 'TextEdit', 'parroq_at': 'TextEdit', 'x_at': 'TextEdit', 'y_at': 'TextEdit', 'amie_2': 'TextEdit', 'ie_2': 'TextEdit', 'estado_2': 'TextEdit', 'soste_2': 'TextEdit', 'oferta1_2': 'TextEdit', 'oferta2_2': 'TextEdit', 'oferta3_2': 'TextEdit', 'oferta4_2': 'TextEdit', 'lengua_2': 'TextEdit', 'regimen_2': 'TextEdit', 'jurisd_2': 'TextEdit', 'zona_2': 'TextEdit', 'distrito_2': 'TextEdit', 'prov_2': 'TextEdit', 'cant_2': 'TextEdit', 'parroq_2': 'TextEdit', 'x_2': 'TextEdit', 'y_2': 'TextEdit', 'dist_at_2': 'TextEdit', 'no_opcione': 'TextEdit', });
lyr_ie_at_220425_2.set('fieldImages', {'amie_at': 'TextEdit', 'ie_at': 'TextEdit', 'no_ee': 'TextEdit', 'soste_at': 'TextEdit', 'zona_at': 'TextEdit', 'distrito_a': 'TextEdit', 'prov_at': 'TextEdit', 'cant_at': 'TextEdit', 'parroq_at': 'TextEdit', 'x_at': 'TextEdit', 'y_at': 'TextEdit', });
lyr_op_ie_inact_1.set('fieldLabels', {'amie_at': 'inline label - always visible', 'ie_at': 'inline label - always visible', 'no_ee': 'inline label - always visible', 'soste_at': 'inline label - always visible', 'zona_at': 'inline label - always visible', 'distrito_a': 'inline label - always visible', 'prov_at': 'inline label - always visible', 'cant_at': 'inline label - always visible', 'parroq_at': 'inline label - always visible', 'x_at': 'inline label - always visible', 'y_at': 'inline label - always visible', 'amie_2': 'inline label - always visible', 'ie_2': 'inline label - always visible', 'estado_2': 'inline label - always visible', 'soste_2': 'inline label - always visible', 'oferta1_2': 'inline label - always visible', 'oferta2_2': 'inline label - always visible', 'oferta3_2': 'inline label - always visible', 'oferta4_2': 'inline label - always visible', 'lengua_2': 'inline label - always visible', 'regimen_2': 'inline label - always visible', 'jurisd_2': 'inline label - always visible', 'zona_2': 'inline label - always visible', 'distrito_2': 'inline label - always visible', 'prov_2': 'inline label - always visible', 'cant_2': 'inline label - always visible', 'parroq_2': 'inline label - always visible', 'x_2': 'inline label - always visible', 'y_2': 'inline label - always visible', 'dist_at_2': 'inline label - always visible', 'no_opcione': 'inline label - always visible', });
lyr_ie_at_220425_2.set('fieldLabels', {'amie_at': 'inline label - always visible', 'ie_at': 'inline label - always visible', 'no_ee': 'inline label - always visible', 'soste_at': 'inline label - always visible', 'zona_at': 'inline label - always visible', 'distrito_a': 'inline label - always visible', 'prov_at': 'inline label - always visible', 'cant_at': 'inline label - always visible', 'parroq_at': 'inline label - always visible', 'x_at': 'inline label - always visible', 'y_at': 'inline label - always visible', });
lyr_ie_at_220425_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});