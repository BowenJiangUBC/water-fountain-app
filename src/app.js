import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './components/MapContainer'

class App extends React.Component{


	render(){
		return(
			<div>
				<MapContainer />
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));