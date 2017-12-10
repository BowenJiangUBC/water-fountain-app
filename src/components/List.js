/**
 * Created by bowenjiang on 12/10/17.
 */
import React from 'react';
import {Collapse} from 'reactstrap'

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state={
            collapse:false,
            currentBuilding: 0
        }
    }

    toggle(i){
        console.log(i);
        this.setState(
            {
                collapse: !this.state.collapse,
                currentBuilding:i
            }
        );
    }

    showFountains(i){
        return(
            <ul>
                {this.props.buildings[i].fountains.map((f,i)=>(
                    <li key={i}>
                        {f.floor}
                        {f.description}
                    </li>
                ))}
            </ul>
        )
    }

    render(){
        const buildings = this.props.buildings;
        return(
            <div>
                <ul>
                    {buildings.map((b,i)=>(
                        <li key={i} onClick={ () => this.toggle(i)}>
                            {b.buildingName}
                            <Collapse isOpen={this.state.collapse}>
                                {
                                    i==this.state.currentBuilding
                                        ? this.showFountains(i)
                                        : <div></div>
                                }
                            </Collapse>
                        </li>
                    ))}
                </ul>
            </div>

        )
    }
}