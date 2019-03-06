import React from "react";
import "../CSS/style.css";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:""
        }
    }
    onChangeHandler(e){
        this.setState({
            title:e.target.value
        })
    }
    render(){
        return (
            <header>
            <div className="logo"> Logo </div>
            <input onChange={this.onChangeHandler.bind(this)} type="text" />
            <div> {this.state.title} </div>
            </header>
        )
    }
}

export default Header;