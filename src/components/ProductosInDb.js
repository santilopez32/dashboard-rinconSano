import React from 'react';
import { useState, useEffect } from "react"


function ProductosInDb () {
    const [categ, setCateg] = useState([[]]) 

    const initialUrl = 'http://localhost:3000/api/categ'

    const fetchProducts = (url) => {
        fetch(url)
        .then((respuesta) =>  respuesta.json())
        .then((categ) => setCateg(categ.data.categ))
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        console.log("%cSe montó un componente", "color:green");
        fetchProducts(initialUrl)
        console.log(categ)        
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
                        Cantidad de productos por categoría
                        </h5>
                    </div>
                    {
                    categ.map((categ, i) => {
                        return(
                    <div className="card-body">
                        <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                            <div className="card-body" key = {i}>{categ.nombre}: {(categ.Productos || []).length} </div>
                            </div>
                        </div>                                                                        
                        </div>
                    </div>
                                )
                            })
                    }			
                    </div>
                </div>                                
            </React.Fragment>
        )
    }


export default ProductosInDb;