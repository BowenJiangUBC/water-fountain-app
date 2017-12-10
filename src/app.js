import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './components/MapContainer';
import data from '../data/data.json';
import Sidebar from './components/Sidebar';


class App extends React.Component{


	render(){
		const style={
			display:'flex',
			flexDirection: 'row'
		};
		return(
			<div style={style}>
				<Sidebar
					buildings={data}
				/>

				<MapContainer
					buildings={data}
				/>
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));