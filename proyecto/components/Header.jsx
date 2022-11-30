import React from 'react'
function Header(){
    return (
        <header className="header">
        <div className="flex">
            <div className="logo">
                <a href="/"><img src="/img/logo/logo-beerbar.png" alt="logo"/></a>
            </div> 
            <form action="/busqueda" method="get">
            <div className="buscar">
                <input type="text" name="search" id="search" placeholder="Birras, comida y más..." required/>
                <button type="submit" className="btn">
                    <i className="fa-solid fa-magnifying-glass icon"></i>
                </button>
            </div>
            </form>
            
            <div className="icons">
                <button className="carrito">
          
                    <a href="/products/cart"><i className="fa-solid fa-cart-shopping"></i></a>
               
                    <a href="/users/login"><i className="fa-solid fa-cart-shopping"></i></a> 
               
                </button>
                <button className="burger" id="menu">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    
        <nav>
            <ul>
                <li><a href="/products">Productos</a></li>
                <li><a href="#">Empresa</a></li>
                <li><a href="#">Ayuda</a></li>
             
                <li><a href="/admin/list">Admin</a></li>
      
            </ul>
            <ul className="user">
                
    
                <li><a href="/users/profile">Bienvenido </a></li>
       
                <li><a href="/users/login">Login</a></li>
                <li><a href="/users/register">Registro</a></li>
         
                
            </ul>
    
            
        {/*     <!-- <div className="t-f">
                <button><i className="fa-brands fa-twitter"></i></button>
                <button><i className="fa-brands fa-facebook-f"></i></button>
            </div> --> */}
        </nav>
    
    </header>
    )
}
export default Header 