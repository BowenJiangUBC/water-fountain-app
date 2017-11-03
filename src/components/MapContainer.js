/**
 * Created by bowenjiang on 10/24/17.
 */
import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import Map from './Map';
import Marker from './Marker'

export class MapContainer extends React.Component {

    componentWillMount(){
    	this.setState({
    		fountains:[
    			{
    				building: "MET",
    				lat: 42.3504, lng: -71.1076
    			},
    			{
    				building: "CAS",
    				lat: 42.3503, lng: -71.1049
    			},
    			{
    				building: "COMM",
    				lat: 42.3489, lng: -71.1025
    			}
    		]
    	})
    };

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
                <Map google={this.props.google}>
                    <Marker fountains={this.state.fountains} />
                </Map>

            </div>
        )

    }

}









export default GoogleApiWrapper({
    apiKey: "AIzaSyBnCsQN7SqbCBzshFOwgxhXN4aa7JHtbA8"
})(MapContainer)