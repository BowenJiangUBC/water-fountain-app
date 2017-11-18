/**
 * Created by bowenjiang on 10/24/17.
 */
import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import Map from './Map';
import Marker from './Marker';
import InfoWindow from './InfoWindow';


export class MapContainer extends React.Component {

    constructor(props) {
        super(props);

        this.onMarkerClick = this.onMarkerClick.bind(this);


        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: ""
        }
    }

    onMarkerClick(marker){
        this.setState({
            activeMarker: marker,
            selectedPlace: marker.getTitle(),
            showingInfoWindow: true
        });
    };

    render(){
        const style={
            width: '90vw',
            height: '90vh'
        };

        return(
            <div style={style}>
                <Map google={this.props.google}>

                    <Marker
                        buildings={this.props.buildings}
                        onClick={this.onMarkerClick}
                        addMarker={this.addMarker}/>

                    <InfoWindow
                        {...this.props}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>

                        <div><h4>{this.state.selectedPlace}</h4></div>
                    </InfoWindow>

                </Map>

            </div>
        )

    }

}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBnCsQN7SqbCBzshFOwgxhXN4aa7JHtbA8"
})(MapContainer)