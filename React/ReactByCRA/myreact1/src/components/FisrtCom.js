import React from "react";
import {Component} from "react";
class FirtCom extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    handleClick(ref) {
        console.log(ref)
    }

    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul ref={this.myRef}>
                    <li  onClick={()=>this.handleClick(this.myRef)}>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}
export default FirtCom