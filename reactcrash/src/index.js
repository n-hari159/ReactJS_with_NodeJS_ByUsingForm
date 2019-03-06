import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Form from './Components/Form'

//Components

const App = () => {
    return ( 
        <div>
            <Header />
            <Form />
        </div>
    )
}
ReactDOM.render( < App / > , document.querySelector("#root"));