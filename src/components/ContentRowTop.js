import React from 'react';
import ProductosInDb from './ProductosInDb';
import TableData from './TableData';
import { useState, useEffect } from "react"
import imagen from "../assets/images/galletitasNina.jpg"

function ContentRowTop(){
	const [productos, setProductos] = useState({}) 

    const initialUrl = 'http://localhost:3000/api/products'
	const [pic, setProductPic] = useState([]) 

    /*'http://localhost:3000/api/products'*/

    const fetchProducts = (url) => {
        fetch(url)
        .then((respuesta) =>  respuesta.json())
        .then((productos) => {
            fetchProductoIndividual(`http://localhost:3000/api/products/${productos.data.productos.length +12}`)
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
    }, [])
    useEffect(()=>{
        console.log("%cSe actualizó un componente", "color:yellow");
    }, [])

	if(!productos){
		return <p>Cargando..</p>
	}
	else{
    return(
        <React.Fragment>
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					<TableData />
					
						<div className="row">					           		
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último producto en stock</h5>
								</div>								 																									
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 +'rem'}} src={pic}  alt=" Galletitas Nina "/>
									</div>
									<h5>Producto:</h5>
									<p>{productos.nombre}</p>
									<h5>Descripción:</h5>
                    				<p>{productos.descripcion}</p>					
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del producto</a>
								</div>								
							</div>							
						</div>						
						<ProductosInDb />
					</div>									
				</div>
        </React.Fragment>
    )
}
}
export default ContentRowTop;