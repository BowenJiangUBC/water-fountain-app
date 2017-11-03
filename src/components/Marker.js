/**
 * Created by bowenjiang on 11/1/17.
 */
import React from 'react';

export default class Marker extends React.Component{

    componentDidUpdate(prevProps) {
        if ((this.props.map !== prevProps.map) ||
            (this.props.position !== prevProps.position)) {
            // The relevant props have changed
            this.renderMarker();
        }
    };

    renderMarker() {
        // ...
        let {
            map, google, position, mapCenter, fountains
        } = this.props;


        let pos = position || mapCenter;
        position = new google.maps.LatLng(pos.lat, pos.lng);

        const locIcon = {
            url: 'http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Button-Blank-Blue-icon.png',
            // This marker is 20 pixels wide by 32 pixels high.
            scaledSize: new google.maps.Size(15,15)
        };


        const locPref = {
            map: map,
            position: position,
            icon: locIcon
        };
        this.locMarker = new google.maps.Marker(locPref);

        const founPos = fountains.map((fountain) =>{
            return(
                new google.maps.LatLng(fountain.lat,fountain.lng)
            );
        });

        const founIcon = {
            url: 'http://www.stopsignsandmore.com/images/Product/medium/1573.gif',
            scaledSize: new google.maps.Size(30,30)
        };

        const founPref = {
            map:map,
            icon:founIcon
        };

        this.founMarkers = founPos.map((f)=>{
            return(new google.maps.Marker(Object.assign(founPref, {position:f})))
        });


    };

    render(){
        return(<div>

        </div>)
    }

}


Marker.propTypes={
    position: React.PropTypes.object,
    map: React.PropTypes.object,
};