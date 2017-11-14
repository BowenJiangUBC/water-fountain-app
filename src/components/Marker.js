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

    addressLookup(geocoder,building,func){
        let result = {
            lat:undefined,
            lng:undefined,
            title: building.buildingName
        };

        geocoder.geocode({'address':building.address},(results,status)=>{
            if(status==='OK'){
                console.log(1);
                result.lat = results[0].geometry.location.lat();
                result.lng = results[0].geometry.location.lng();
            }
            func(result)
        });


    }

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

        const geocoder = new google.maps.Geocoder();

        this.markers=[];

        const bldgLatLngs = buildings.map((building)=>{

            this.addressLookup(geocoder,building,(result)=>{
                this.markers.push(new google.maps.Marker({
                    map:map,
                    position: new google.maps.LatLng(result.lat,result.lng),
                    icon:bldgIcon,
                    title:result.title
                }));

                this.markers.map((marker)=>{
                    marker.addListener('click',(evt)=>{
                        onClick(marker)
                    })
                })
            })
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