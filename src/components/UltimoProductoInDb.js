import React from 'react';
import { useState, useEffect } from "react"


function UltimoProductoInDb(){
    const [productos, setProductos] = useState([]) 
    const [pic, setProductPic] = useState([]) 
    
    const initialUrl = `http://localhost:3000/api/products`
    let secondUrl = `http://localhost:3000/api/products/${productos.id}`
    
    /*'http://localhost:3000/api/products'*/
    
    const fetchProducts = (url) => {
        fetch(url)
        .then((respuesta) =>  respuesta.json())
        .then((productos) => {
            fetchProductoIndividual(`http://localhost:3000/api/products/${productos.data.productos.length -1}`)
            setProductos(productos.data.productos[productos.data.productos.length-1])})
        .catch(error => console.log(error))
        console.log(productos);
    }
    const fetchProductoIndividual = (url) => {       
        fetch(url)
        .then((respuesta) =>  respuesta.json())
        .then((pic) => {
            if(!pic.error){
                setProductPic(pic.data.linkToImage);
            } else{
                setProductPic([])
            }
        })        
    }
    
    
    useEffect(()=>{
        console.log("%cSe montó un componente", "color:green");
        fetchProducts(initialUrl)
        
        console.log(secondUrl)        
    }, [])
    useEffect(()=>{
        /*console.log(productos);
        console.log(productos.imagen)*/
        console.log("%cSe actualizó un componente", "color:yellow");
    }, [])
    if(!productos){
		return <p>Cargando..</p>
	}
    return(
        <React.Fragment>   
        <div className="col-lg-6 mb-4">            
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto vendido</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={pic} alt=" Galletitas Nina "/>
                    </div>
                    <h5>Producto:</h5>
                    <p>{productos.imagen}</p>
                    <p>{productos.nombre}</p>
                    <h5>Descripción:</h5>
                    <p>{productos.descripcion}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del producto</a>
                </div>
            </div>           
        </div>
        </React.Fragment>             
    )
}

export default UltimoProductoInDb;
