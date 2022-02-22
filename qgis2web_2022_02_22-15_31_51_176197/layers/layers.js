var wms_layers = [];


        var lyr_datanextgiscombasemap_0 = new ol.layer.Tile({
            'title': 'data.nextgis.com basemap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile-a.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            })
        });
var format_17_Com_1 = new ol.format.GeoJSON();
var features_17_Com_1 = format_17_Com_1.readFeatures(json_17_Com_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17_Com_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17_Com_1.addFeatures(features_17_Com_1);
var lyr_17_Com_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_17_Com_1, 
                style: style_17_Com_1,
                interactive: true,
                title: '<img src="styles/legend/17_Com_1.png" /> 17_Com'
            });

lyr_datanextgiscombasemap_0.setVisible(true);lyr_17_Com_1.setVisible(true);
var layersList = [lyr_datanextgiscombasemap_0,lyr_17_Com_1];
lyr_17_Com_1.set('fieldAliases', {'ID': 'ID', 'NOM_COM': 'NOM_COM', 'NOM_COM_M': 'NOM_COM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'INSEE_ARR': 'INSEE_ARR', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'NOM_REG': 'NOM_REG', 'INSEE_REG': 'INSEE_REG', 'InPoly_FID': 'InPoly_FID', 'SimPgnFlag': 'SimPgnFlag', 'MaxSimpTol': 'MaxSimpTol', 'MinSimpTol': 'MinSimpTol', });
lyr_17_Com_1.set('fieldImages', {'ID': 'TextEdit', 'NOM_COM': 'TextEdit', 'NOM_COM_M': 'TextEdit', 'INSEE_COM': 'TextEdit', 'STATUT': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'NOM_REG': 'TextEdit', 'INSEE_REG': 'TextEdit', 'InPoly_FID': 'TextEdit', 'SimPgnFlag': 'Range', 'MaxSimpTol': 'TextEdit', 'MinSimpTol': 'TextEdit', });
lyr_17_Com_1.set('fieldLabels', {'ID': 'no label', 'NOM_COM': 'no label', 'NOM_COM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'INSEE_ARR': 'no label', 'NOM_DEP': 'no label', 'INSEE_DEP': 'no label', 'NOM_REG': 'no label', 'INSEE_REG': 'no label', 'InPoly_FID': 'no label', 'SimPgnFlag': 'no label', 'MaxSimpTol': 'no label', 'MinSimpTol': 'no label', });
lyr_17_Com_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});