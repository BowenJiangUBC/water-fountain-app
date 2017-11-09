/**
 * Created by bowenjiang on 11/6/17.
 */

import React from 'react';
import ReactDOMServer from 'react-dom/server';



export default class InfoWindow extends React.Component{

    renderChildren() {
        const {children} = this.props;
        return ReactDOMServer.renderToString(children);
        console.log("render children")
    }

    openWindow() {
        this.infowindow
            .open(this.props.map, this.props.marker);


        console.log("open window")
    }
    closeWindow() {
        // this.infowindow.close();
        console.log("close window!")
    }


    componentDidUpdate(prevProps) {
        // ...
        if (this.props.map !== prevProps.map) {
            this.renderInfoWindow();
        }

        if (this.props.visible !== prevProps.visible ||
            this.props.marker !== prevProps.marker) {
            this.props.visible ?
                this.openWindow() :
                this.closeWindow();
        }

        if (this.props.children !== prevProps.children) {
            this.updateContent();
        }
    };


    renderInfoWindow() {
        let {google,marker} = this.props;
        //
        this.infowindow = new google.maps.InfoWindow({
            content: 'InfoWindow'
        });
        console.log("render InfoWindow")



    };

    updateContent() {
        if(this.props.map){
            const content = this.renderChildren();
            this.infowindow.setContent(content);
        }

        console.log("Update Content")
    }



    render(){
        return null;
    }
}