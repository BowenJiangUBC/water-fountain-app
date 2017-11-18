import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './components/MapContainer';
import data from '../data/data.json';


class App extends React.Component{


	render(){
		return(
			<div>
				<MapContainer
					buildings={data}
				/>
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));