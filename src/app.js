import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './components/MapContainer';
import data from '../data/data.json';
import Sidebar from './components/Sidebar';


class App extends React.Component{
	constructor(props){
		super(props)
		this.passNearestMarker = this.passNearestMarker.bind(this);
		this.state={
			nearestMarker:{}
		}
	}

	passNearestMarker(marker){
		this.setState({
			nearestMarker:marker
		})

	}


	render(){
		const style={
			display:'flex',
			flexDirection: 'row'
		};
		return(
			<div style={style}>
				<Sidebar
					buildings={data}
					nearestMarker={this.state.nearestMarker}
				/>

				<MapContainer
					buildings={data}
					passMarker={this.passNearestMarker}
				/>
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));