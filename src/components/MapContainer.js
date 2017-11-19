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
            selectedBuilding:"",
            fountainNumber:0,
            address:"",
            distance: ""
        }
    }

    onMarkerClick(marker){
        this.setState({
            activeMarker: marker,
            showingInfoWindow:true,
            selectedBuilding:marker.building,
            fountainNumber:marker.count,
            address:marker.address,
            distance:marker.distance
        });
    };

    render(){
        const style={
            width: '100vw',
            height: '100vh'
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

                        <div>
                            <h4>{this.state.selectedBuilding} {this.state.distance}</h4>
                            <p>
                                {this.state.address}
                            </p>
                            <strong>
                                {this.state.fountainNumber>1
                                    ? this.state.fountainNumber + ' fountains '
                                    : this.state.fountainNumber + ' fountain '}
                                found inside this building.
                            </strong>
                        </div>


                    </InfoWindow>

                </Map>

            </div>
        )

    }

}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBnCsQN7SqbCBzshFOwgxhXN4aa7JHtbA8"
})(MapContainer)