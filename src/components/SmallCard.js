import React from 'react';
import { useState, useEffect } from "react"

function SmallCard(){
    const [productos, setProductos] = useState({}) 

    const initialUrl = 'http://localhost:3000/api/products'

    const fetchProducts = (url) => {
        fetch(url)
        .then((respuesta) =>  respuesta.json())
        .then((productos) => setProductos(productos.data.productos))
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
                <div className={`card border-left-primary shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}>PRODUCTOS EN STOCK</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{productos.length}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas fas fa-box fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default SmallCard;