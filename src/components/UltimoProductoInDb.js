import React from 'react';
import { useState, useEffect } from "react"

function UltimoProductoInDb(){
    const [productos, setProductos] = useState([]) 

    const initialUrl = "https://rickandmortyapi.com/api/character"

    /*'http://localhost:3000/api/products'*/

    const fetchProducts = (url) => {
        fetch(url)
        .then((respuesta) =>  respuesta.json())
        .then((productos) => setProductos(productos.results))
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        console.log("%cSe montó un componente", "color:green");
        fetchProducts(initialUrl)        
    }, [])
    useEffect(()=>{
        console.log(productos);
        console.log("%cSe actualizó un componente", "color:yellow");
    }, [])
    return(
        <React.Fragment>   
        <div className="col-lg-6 mb-4">
            {productos.length === 0 && <p>Cargando..</p>}
            {
            productos.map((productos, i) => {
                return(
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto vendido</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={productos.image}  alt=" Galletitas Nina "/>
                    </div>
                    <p>{productos.name}</p>
                    <p>{productos.gender}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del producto</a>
                </div>
            </div>
            )})}
        </div>
        </React.Fragment>             
    )
}

export default UltimoProductoInDb;