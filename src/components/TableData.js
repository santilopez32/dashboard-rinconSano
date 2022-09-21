import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Productos en stock",
    valor: 100,
    icono: "fas fa-box",
}

let amount ={
    color:   "success",
    titulo: "Categorías disponibles",
    valor: 4,
    icono: "fas fa-award",
}

let user = {
    color:   "warning",
    titulo: "Usuarios registrados",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];


function TableData(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default TableData;