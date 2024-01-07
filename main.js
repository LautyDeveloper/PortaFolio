const contenedorHabs = document.querySelector(".habilidades_container");

class Habilidad{
    constructor(ImagenDeLaHabilidad, Titulo, Parrafo){
        this.ImagenDeLaHabilidad=ImagenDeLaHabilidad;
        this.Titulo=Titulo;
        this.Parrafo=Parrafo;
    }

    MostrarHabilidad(){
        const containerHab = document.createElement("DIV");
        const imagenHab = document.createElement("IMG");
        const textoHab = document.createElement("DIV");
        const tituloHab = document.createElement("h5");
        const parrafoHab = document.createElement("p");

        containerHab.classList.add("habilidades_container_hab")
        textoHab.classList.add("habilidades_container_texto");

        const habsContainer= document.querySelector(".habilidades_container")

        tituloHab.textContent = this.Titulo;
        parrafoHab.textContent= this.Parrafo;

        textoHab.appendChild(tituloHab);
        textoHab.appendChild(parrafoHab);

        containerHab.appendChild(textoHab);

        habsContainer.appendChild(containerHab);


    }

}


const HTML = new Habilidad ("", "HTML", "Maquetado de Paginas Web");
const CSS = new Habilidad ("", "CSS", "Maquetado de Paginas Web");
const JS = new Habilidad ("", "JAVASCRIPT", "Lenguaje utilizado para el FrontEnd");
const BOOT = new Habilidad ("", "BOOTSTRAP", "Framework CSS");
const PHP = new Habilidad ("", "PHP", "Lenguaje utilizado para el BackEnd");
const MYSQL = new Habilidad ("", "MYSQL", "Lenguaje de consultas");
const WAMP = new Habilidad ("", "WAMPP", "Servidor Local");
const XAMPP = new Habilidad ("", "XAMPP", "Servidor Local");
const CANVA = new Habilidad ("", "CANVA", "Diseño de contenido grafico para Paginas Web");
const PHOTO = new Habilidad ("", "PHOTOSHOP", "Diseño de contenido grafico para Paginas Web");
const ILLU = new Habilidad ("", "ILLUSTRATOR", "Diseño de Paginas Web");
const FIGMA = new Habilidad ("", "FIGMA", "Diseño de Paginas Web");

HTML.MostrarHabilidad();
CSS.MostrarHabilidad();
JS.MostrarHabilidad();
BOOT.MostrarHabilidad();
PHP.MostrarHabilidad();
MYSQL.MostrarHabilidad();
WAMP.MostrarHabilidad();
XAMPP.MostrarHabilidad();
CANVA.MostrarHabilidad();
PHOTO.MostrarHabilidad();
ILLU.MostrarHabilidad();
FIGMA.MostrarHabilidad();
