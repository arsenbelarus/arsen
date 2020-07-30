import React from "react";
import loader from "./loader.gif";

const Preloader = () => {
    return (
        <div style={{width: "100px", margin: "20% auto"}}>
            <img src={loader} style={{width: "100px", height: "60px"}}/>
        </div>
    )
}

export default Preloader