/**
 * Created by bowenjiang on 12/10/17.
 */
import React from 'react';
import { Button } from 'reactstrap';

export default class Input extends React.Component{
    constructor(props){
        super(props);
        this.onClick=this.onClick.bind(this);
        this.state={
            nearestMarker: {}
        }
    }

    onClick(){
        let nearestMarker = this.props.nearestMarker;
        this.setState({
            nearestMarker: nearestMarker
        })

    }

    render(){
        console.log(this.props.nearestMarker);
        return(
            <div className="col-md-offset-3 col-md-6">
                <Button color="primary" onClick={this.onClick}>Find a building!!</Button>
                {this.state.nearestMarker.building}
            </div>
        )
    }
}