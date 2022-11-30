import React from 'react';
import Section from 'Section';
function Main() { 
    let productos = [ 
        {
            id,
            img,
            nombre,
            precio,
            descuento, 
            detalle,
        }
    ]
    return (
        <main>

        <h1>PROMOCIONES</h1>

        {productos.map(producto => {
        return(
        <Section
            key={producto.id}
            id={producto.id}
            img={producto.img}
            producto={producto.producto}
            precio={producto.precio}
            descuento={producto.descuento}
            detalle={producto.detalle}
            />  
        }
        <h2>PRODUCTOS DESTACADOS</h2>

   /*      <section className="productos carrouselProductos"> */

        /* <div className="glider-contain"> */
            <div className="glider gli2">

           {/* products.forEach(producto =
           if (((producto.category.name === "nuevo") || ((producto.vendidos * 100) / producto.stock)  > 70 && producto.vendidos >= 10 ) && (producto.stock - producto.vendidos) >= 1  */}
            <div className="article">
                <img src={"/img/productos/${producto.imagenes}"} alt="imagen del producto"/>
                <div className="contenedor">
                    <h3>producto.nombre </h3>
                   {/* if (producto.descuento > 0)  */} 
                    <p className="old">producto.precio </p>
                    <p class="precio">producto.precio - (producto.precio * producto.descuento / 100)  <small class="descuento"> producto.descuento %</small>
                    </p>
                    <p class="precio">producto.precio  </p>
                   
                </div>

                <button><a href={"/products/detail/${producto.id}"}>Comprar</a></button>
            </div>
           

            <div>

            <button aria-label="Previous" class="glider-prev2">«</button>
            <button aria-label="Next" class="glider-next2">»</button>
            <div role="tablist" class="dots2"></div>
        </div>
         </div>
        
          </main>
          )}

    export default Main