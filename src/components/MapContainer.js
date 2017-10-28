/**
 * Created by bowenjiang on 10/24/17.
 */
import React from 'react';
import { InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Map from './Map'

export class MapContainer extends React.Component {

    render(){
        const style={
            width: '90vw',
            height: '90vh'
        };

        const bu={
            lat: 42.3505,
            lng: -71.1054
        };

        return(
            <div style={style}>
                <Map
                    google={this.props.google}
                />

            </div>
        )

    }

}









export default GoogleApiWrapper({
    apiKey: "AIzaSyBnCsQN7SqbCBzshFOwgxhXN4aa7JHtbA8"
})(MapContainer)