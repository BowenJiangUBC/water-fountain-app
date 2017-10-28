import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './components/MapContainer'

class App extends React.Component{
	// componentWillMount(){
	// 	this.setState({
	// 		fountains:[
	// 			{
	// 				building: "MET",
	// 				lat: 42.3504, lng: -71.1076
	// 			},
	// 			{
	// 				building: "CAS",
	// 				lat: 42.3503, lng: -71.1049
	// 			},
	// 			{
	// 				building: "COMM",
	// 				lat: 42.3489, lng: -71.1025
	// 			}
	// 		]
	// 	})
	// };

	render(){
		return(
			<div>
				<MapContainer />
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));