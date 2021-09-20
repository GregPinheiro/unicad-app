import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Map extends Component {
    constructor (props) {
        super(props);
        this.state = {
            address: []
        }
    }

    render() {
        return(
            <div>
                <h1>Mapa</h1>
            </div>
        )
    }
}

export default Map;