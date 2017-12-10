/**
 * Created by bowenjiang on 10/25/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';



export default class Map extends React.Component{

    constructor(props) {
        super(props);

        const {lat, lng} = this.props.initialCenter;
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        }
    }

    componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    const coords = pos.coords;
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    })
                })
            }
        }
        this.loadMap();
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
            this.recenterMap();
        }
    };

    recenterMap(){
        const map = this.map;
        const curr = this.state.currentLocation;

        const google = this.props.google;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(curr.lat, curr.lng);
            map.panTo(center)
        }
    };




    loadMap() {
        if (this.props && this.props.google) {
            // google is available
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            let zoom = this.props.zoom;
            const {lat, lng} = this.state.currentLocation;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            });
            this.map = new maps.Map(node, mapConfig);
        }
    };

    renderChildren(){
        const {children} = this.props;

        if (!children) return;


        return React.Children.map(children, c => {
            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
                position: this.state.currentLocation,
                mapCenter:this.props.initialCenter
            });
        });

    };


    render() {
        const style = {
            width: '80vw',
            height: '100vh'
        };
        return (
            <div style={style} ref='map'>
                Loading map...
                {this.renderChildren()}
            </div>
        )
    }
}

Map.propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object,
    centerAroundCurrentLocation: PropTypes.bool
};

Map.defaultProps = {
    zoom: 15,
    // Boston University
    initialCenter: {
        lat: 42.3505, lng: -71.1054
    },
    centerAroundCurrentLocation: true
};

