import React from 'react';
import { useState, useEffect } from "react"


function ProductosInDb () {
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
        console.log("%cSe actualizó un componente", "color:yellow");
    }, [])
    
        return (
            <React.Fragment>
                            <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                        Categorías en nuestra base de datos
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                            <div className="card-body">Acción</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                            <div className="card-body">Animación</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                            <div className="card-body">Aventura</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                            <div className="card-body">Ciencia Ficción</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                            <div className="card-body">Comedia</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                            <div className="card-body">Documental</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                            <div className="card-body">Drama</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                            <div className="card-body">Fantasia</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                            <div className="card-body">Infantiles</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                            <div className="card-body">Musical</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>                                
            </React.Fragment>
        )
    }


export default ProductosInDb;