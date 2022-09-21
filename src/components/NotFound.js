import React from "react";
import imagen from "../assets/images/darth-vader.jpg"

function NotFound() {
    return (
        <div className="text-center">
            <h1>
                404 NOT FOUND
            </h1>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagen} alt=" Star Wars - Mandalorian "/>
        </div>
    )
}

export default NotFound