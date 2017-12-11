/**
 * Created by bowenjiang on 11/1/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

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

    // addressLookup(geocoder,map,building,position, onClick, func){
    //     let latLng = {
    //         lat:undefined,
    //         lng:undefined,
    //     };
    //
    //     geocoder.geocode({'address':'685 Commonwealth Avenue,' + ' Boston MA, USA'},(results,status)=>{
    //         if(status==='OK'){
    //             latLng.lat = results[0].geometry.location.lat();
    //             latLng.lng = results[0].geometry.location.lng();
    //         } else if(status === 'OVER_QUERY_LIMIT') {
    //
    //         }
    //         console.log(status, building.buildingName,latLng);
    //         func(latLng)
    //     });
    // }




    distanceLookup(google, origin, dest, func){
        const service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
                origins: [origin],
                destinations: [dest],
                travelMode: 'WALKING'
            }, (response,status)=>{
                if (status === 'OK') {
                    const dist = response.rows[0].elements[0].distance.text;
                    func(dist)
                }

        });
    }

    findClosestMarker(markers,func){
        let nearestMarker = markers[0]
        markers.map((marker)=>{
            const minDist = parseFloat(nearestMarker.distance);
            const currDist = parseFloat(marker.distance);
            if (currDist<=minDist){
                nearestMarker = marker;
            }
        });

        func(nearestMarker);
    }

    renderMarker() {
        // ...
        let {
            map, google, position, mapCenter, buildings,onClick,findNear
        } = this.props;

        let pos = position || mapCenter;
        position = new google.maps.LatLng(pos.lat, pos.lng);

        const bldgIcon = {
            url: 'http://www.stopsignsandmore.com/images/Product/medium/1573.gif',
            scaledSize: new google.maps.Size(30,30)
        };

        const markers = [];

        buildings.map((building)=>{
            let dest = {
                lat:building.lat,
                lng:building.lng
            };

            this.distanceLookup(google,position,dest,(dist)=>{
                let marker = new google.maps.Marker({
                    map:map,
                    position: new google.maps.LatLng(building.lat,building.lng),
                    icon:bldgIcon,
                    building: building.buildingName,
                    count: building.fountains.length,
                    address: building.address,
                    distance: dist
                });

                marker.addListener('click',(evt)=>{
                    onClick(marker)
                });

                markers.push(marker);
                if(markers.length==buildings.length){
                    this.findClosestMarker(markers,(nearestMarker)=>{
                        findNear(nearestMarker)
                    })
                }
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
        new google.maps.Marker(locPref);


    };

    render(){
        return null;
    }

}


Marker.propTypes={
    position: PropTypes.object,
    map: PropTypes.object,
};