/**
 * Created by bowenjiang on 12/10/17.
 */
import React from 'react';
import {Collapse} from 'reactstrap'

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        const buildings=this.props.buildings.map((building)=>{
            return({
                building: building,
                collapse: false
            })
        });
        this.state = {
            buildings:buildings
        };
    }

    toggle(i){
        this.setState((prevState)=>({
            buildings: [
                ...prevState.buildings.slice(0,i),
                Object.assign({},prevState.buildings[i],{collapse: !prevState.buildings[i].collapse}),
                ...prevState.buildings.slice(i+1)
            ]
        }))
    }

    render(){
        const buildings = this.props.buildings;
        return(
            <div>
                <ul>
                    {buildings.map((b,i)=>(
                        <li key={i} onClick={ () => this.toggle(i)}>
                            {b.buildingName}
                            <Collapse isOpen={this.state.buildings[i].collapse}>
                                <ul>
                                    {b.fountains.map((f,i)=>(
                                        <li key={i}>
                                            Floor {f.floor}, {
                                                f.description==""
                                                ? "Try find it!" : f.description
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </Collapse>
                        </li>
                    ))}
                </ul>
            </div>

        )
    }
}