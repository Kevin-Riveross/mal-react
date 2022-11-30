import React from 'react'
function Footer(){
    return (
        <footer>
        <section>
            <p> <a href="https://twitter.com/"> <i className="fa-brands fa-twitter"></i></a>
    
                <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://web.whatsapp.com/"><i className="fa-brands fa-whatsapp-square"></i></a>
            </p>
        </section>
        <section className="contenedor">
            <article><a href="">Nuestros Productos</a> </article>
            <article><a href="">Empresa</a> </article>
            <article><a href=""> Terminos y condiciones</a></article>
            <article><a href="">Politicas de privacidad</a></article>
         <article><a href="/register">Registrarse</a> / <a href="/login">Ingresar</a></article> </section
         ><section className="contenedor_2">
            <article><a href="">ayuda</a></article>
            <article><a href="">Contacto</a></article>
             <article><a href="">Franquicias</a></article>
            <article><a href="">Happyhours</a></article>
        </section>
        <section>
            <article>Beber con moderacion. Prohibida su venta a menores de 18 años. No comparta el contenido con
                menores. 2021 BEER&BAR</article>
            <span className="copyright">Copyright © beer&bar</span>
        </section>
    
    </footer>
    )
}
export default Footer 