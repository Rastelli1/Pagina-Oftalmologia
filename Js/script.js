const header= document.querySelector('header');
const footer= document.querySelector('footer');

header.innerHTML= `
<div>
    <h2 class="Empresa-Nombre">Oftalmología Avanzada Clarity</h2>
</div>
    <nav>
    <a href="../html/index.html" class="link-nav">Inicio</a>
    <a href="../html/servicios.html" class="link-nav">Servicios</a>
    <a href="../html/estudios.html" class="link-nav">Estudios</a>
    <a href="../html/blog.html" class="link-nav">Blog</a>
    <a href="../html/nosotros.html" class="link-nav">Nosotros</a>
    <a href="../html/contacto.html" class="link-nav">Contacto</a>
    </nav>
`;


footer.innerHTML=`

<div>
   <article>
        <h2>Oftalmología Avanzada Clarity</h2>
        <p>Direccion : asdasdada</p>
        <p>email: ConsultorioClarity@gmail.com</p>
         <p>Telefono: 0024-1906-2345</p>
    </article>
    
    <article>
         <h2>Secciones</h2>
        <ul>
            <a href="../html/index.html" class="link-nav">Inicio</a>
            <a href="../html/servicios.html" class="link-nav">Servicios</a>
            <a href="../html/estudios.html" class="link-nav">Estudios</a>
            <a href="../html/blog.html" class="link-nav">Blog</a>
            <a href="../html/nosotros.html" class="link-nav">Nosotros</a>
            <a href="../html/contacto.html" class="link-nav">Contacto</a>
        </ul>
    </article>         
</div>

`;