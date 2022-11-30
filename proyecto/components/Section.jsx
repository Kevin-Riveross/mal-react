import React from "react"
function Section ({id, precio, producto, categoria, descuento,img}){
    return ( 
<section className="productos carrouselProductos" >

        <div className="glider-contain">
            <div className="glider">

       
                <div className="article">
                    <img src={'/img/productos/${img}'} alt="" />
                    <div className="contenedor">
                        <h3> {nombre} </h3>
                        <p className="old">{precio} </p>
                        <p className="precio"> {(precio * descuento / 100)}
                         <small className="descuento">{descuento}</small> </p>
                         
                        <p className="precio">{precio} </p>
                     
                    </div>
                    <button><a href={"/products/detail/${id}"}>Comprar</a></button>
                </div> 
       
            </div>

            <button aria-label="Previous" className="glider-prev">«</button>
            <button aria-label="Next" className="glider-next">»</button>
            <div role="tablist" className="dots"></div>
        </div>


        </section>
        )
}
export default Section 