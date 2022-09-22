import React from 'react';
import { useState, useEffect } from "react"

function SmallCard1(){
    const [categ, setCateg] = useState({}) 

    const initialUrl = 'http://localhost:3000/api/categ'

    /*'http://localhost:3000/api/products'*/

    const fetchProducts = (url) => {
        fetch(url)
        .then((respuesta) =>  respuesta.json())
        .then((categ) => setCateg(categ.data.categ))
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        console.log("%cSe montó un componente", "color:green");
        fetchProducts(initialUrl)        
    }, [])
    useEffect(()=>{
        console.log("%cSe actualizó un componente", "color:yellow");
    }, [])
    return(
        <React.Fragment>
            <div className="col-md-4 mb-4">
                <div className={`card border-left-warning shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-warning text-uppercase mb-1`}> CATEGORÍAS DISPONIBLES</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{categ.length}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas fas fa-award fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default SmallCard1;