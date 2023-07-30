import React from 'react'
import Map, { Source, Layer, ScaleControl } from 'react-map-gl';

const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
        'circle-radius': 7,
        'circle-color': 'red'
    }
};



function Maps(props) {
    let coordinates = [];
    coordinates.push(props.longitude)
    coordinates.push(props.latitude)
    let geojson = {
        type: 'FeatureCollection',
        features: [
          { type: 'Feature', geometry: { type: 'Point', coordinates:coordinates } }
        ]
      }


        return(
             <Map
              mapboxAccessToken="pk.eyJ1IjoicmFodWxqYWRhdjIxIiwiYSI6ImNsa210bmM2dDA0eHEzam9jZ3Rhd3Q2dm4ifQ.0Xs1A6kwST_uscYEYBwZkA"
              initialViewState={{
                longitude: props.longitude,
                latitude: props.latitude,
                zoom: 9
              }}
              style={{ width: 400, height: 360 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
            >
              <Source id="my-data" type="geojson" data={geojson}>
                <Layer {...layerStyle} />
              </Source>
              <ScaleControl />
            </Map> 
        )
   
    
}

export default Maps