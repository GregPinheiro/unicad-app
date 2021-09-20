import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import google from 'google-maps';

function calcRoute() {
  function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var chicago = new google.maps.LatLng(41.850033, -87.6500523);
    var mapOptions = {
      zoom:7,
      center: chicago
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsRenderer.setMap(map);

    var request = {
      origin: "Guarulhos",
      destination: "Atibaia",
      travelMode: "DRIVING"
    }
  
    directionsService.route(request, function(result, status) {
      if (status === "OK") {
        directionsRenderer.setDirections(result);
      }
    })
  }  
}

class App extends Component {
  render(){
    return(
      <div>
        <NavBar />

        <div id="map"/>
      </div>
    )
  }
}

export default App;