/**
 * Created by bowenjiang on 11/1/17.
 */
import React from 'react';

export default class Marker extends React.Component{

    constructor(props) {
        super(props);

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
            map, google, position, mapCenter, buildings,onClick
        } = this.props;

        let pos = position || mapCenter;
        position = new google.maps.LatLng(pos.lat, pos.lng);


        const bldgIcon = {
            url: 'http://www.stopsignsandmore.com/images/Product/medium/1573.gif',
            scaledSize: new google.maps.Size(30,30)
        };

        const bldgInfo = [];
        const bldgPos = buildings.forEach((building) =>{
            const geocoder = new google.maps.Geocoder();

            return({
                position:geocoder.geocode({'address': building.address}, (results,status)=>{
                    if(status==='OK'){
                        return(results[0].geometry.location)
                        // const marker = new google.maps.Marker({
                        //     map: map,
                        //     icon: bldgIcon,
                        //     position: results[0].geometry.location,
                        //     title: building.buildingName
                        // });
                        // marker.addListener('clicked', (evt)=>{
                        //     onClick(marker)
                        // })
                    }
                }),
                title:building.buildingName
            })
        });

        const bldgPref = {
            map:map,
            icon:bldgIcon
        };

        this.bldgMarkers = bldgPos.map((b)=>{
            return(new google.maps.Marker(Object.assign(bldgPref, b)))
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
        return null;
    }

}


Marker.propTypes={
    position: React.PropTypes.object,
    map: React.PropTypes.object,
};