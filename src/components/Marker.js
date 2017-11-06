/**
 * Created by bowenjiang on 11/1/17.
 */
import React from 'react';

export default class Marker extends React.Component{

    constructor(props) {
        super(props);

        let {onClick} = this.props;

    };

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
            map, google, position, mapCenter, buildings,
        } = this.props;

        let pos = position || mapCenter;
        position = new google.maps.LatLng(pos.lat, pos.lng);

        const bldgPos = buildings.map((building) =>{
            return(
                new google.maps.LatLng(building.lat,building.lng)
            );
        });

        const bldgIcon = {
            url: 'http://www.stopsignsandmore.com/images/Product/medium/1573.gif',
            scaledSize: new google.maps.Size(30,30)
        };

        const bldgPref = {
            map:map,
            icon:bldgIcon
        };

        this.bldgMarkers = bldgPos.map((b)=>{
            return(new google.maps.Marker(Object.assign(bldgPref, {position:b})))
        });

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


    };

    render(){
        return(<div onClick={this.onClick}>
            <div >

            </div>

        </div>)
    }

}


Marker.propTypes={
    position: React.PropTypes.object,
    map: React.PropTypes.object,
};