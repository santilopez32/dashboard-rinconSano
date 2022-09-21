import React from 'react';
import { useState, useEffect } from "react"

function TodosLosProductos(){
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
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Todos los productos disponibles:</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
							{productos.length === 0 && <p>Cargando..</p>}
							
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">	
									<thead>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>Precio</th>
										<th>Categoría</th>
										<th>Descuento</th>
									</tr>
								</thead>
																	
								<tbody>
								{
                                        productos.map((productos, i) => {
                                            return(
											<tr>									
												<td  key = {i}>{productos.id}</td>
												<td>{productos.name}</td>
												<td>{productos.status}</td>
												<td>{productos.species}</td>
												<td>{productos.gender}</td>									
											</tr>                                                
                                            )
                                        })
                                }																						
								</tbody>
							</table>									
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default TodosLosProductos;