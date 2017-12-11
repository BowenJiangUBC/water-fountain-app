/**
 * Created by bowenjiang on 11/18/17.
 */

import React from 'react';
import { Nav, NavItem, NavLink,  NavbarBrand,Navbar } from 'reactstrap';
import List from './List';
import Input from './Input';

export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
        const {buildings}=this.props.buildings;
        this.state={
            buildings:buildings
        };

    }

    render(){
        const sidebar={
            width:'20vw',
            color: '#fff',
            height:'100vh',
            background: '#29363d',
            overflow: 'auto'
        };
        return(
            <div style={sidebar}>
                <Navbar >
                    <NavbarBrand href="https://github.com/BowenJiangUBC/water-fountain-app">BowenJiangUBC@Github</NavbarBrand>

                    <Nav vertical tabs>
                        <NavItem>
                            <NavLink href="#1a" data-toggle="tab" >Recommand</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#1b" data-toggle="tab">List</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>

                <div className="tab-content clearfix">


                    <div className="tab-pane active" id="1a">
                        <Input
                            nearestMarker={this.props.nearestMarker}
                        />
                    </div>
                    <div className="tab-pane" id="1b">
                        <List buildings={this.props.buildings}>

                        </List>
                    </div>
                </div>
            </div>
        )
    }
}