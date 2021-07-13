import React, {Component} from "react";
import { Map, GoogleApiWrapper, Marker, Polygon } from 'google-maps-react';

export class MapContainer extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const polygonCoords = [
                {lat: 42.23982914405, lng: -83.35447311401367},
                {lat: 42.20995654939329, lng: -83.38743209838867},
                {lat: 42.18452193135192, lng: -83.37146759033203},
                {lat: 42.18719304724962, lng: -83.3536148071289},
                {lat: 42.19380675326742, lng: -83.32340240478514},
                {lat: 42.23118661249613, lng: -83.31430435180664},
                {lat: 42.24160834186122, lng: -83.34932327270508},
                {lat: 42.23982914405, lng: -83.35447311401367},
              ]

    return (
      <div className="map-container">
        <Map
          google={this.props.google}
          className={"map"}
          zoom={11}
          initialCenter={{ lat: 42.220520, lng: -83.385307}}
        >
          <Polygon
            paths={polygonCoords}
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor={"D3D3D3"}
            fillOpacity={0.35}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD3uXZRFB9AlWQe-ZoMa4tDzgU_l_XUB_0'
})(MapContainer);