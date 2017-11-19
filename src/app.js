import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './components/MapContainer';
import data from '../data/data.json';
import Sidebar from './components/Sidebar';


class App extends React.Component{


	render(){
		return(
			<div className="wrapper">

                <Sidebar
                    buildings={data}
                />

				<MapContainer
                    id="mapContainer"
					buildings={data}
				/>
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));