import React, {Component} from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};


export class MapContainer extends Component {
  constructor(props) {
 
    super(props);

    this.state = {
      stores: [,
              {latitude: 42.23982914405, longitude: -83.35447311401367},
              {latitude: 42.20995654939329, longitude: -83.38743209838867},
              {latitude: 42.18452193135192, longitude: -83.37146759033203},
              {latitude: 42.18719304724962, longitude: -83.3536148071289},
              {latitude: 42.19380675326742, longitude: -83.32340240478514},
              {latitude: 42.23118661249613, longitude: -83.31430435180664},
              {latitude: 42.24160834186122, longitude: -83.34932327270508},
              {latitude: 42.23982914405, longitude: -83.35447311401367},
            ]
    }
  }
  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={11}
          style={mapStyles}
          initialCenter={{ lat: 42.331429, lng: -83.045753}}
        >
          {this.displayMarkers()}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD3uXZRFB9AlWQe-ZoMa4tDzgU_l_XUB_0'
})(MapContainer);