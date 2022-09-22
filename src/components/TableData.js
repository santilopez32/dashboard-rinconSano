import React from 'react';
import SmallCard from './SmallCard';
import SmallCard1 from './SmallCard1';
import SmallCard2 from './SmallCard2';

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
             <SmallCard />
             <SmallCard1 />
             <SmallCard2 />            
        </div>
        </React.Fragment>
    )
}
export default TableData;