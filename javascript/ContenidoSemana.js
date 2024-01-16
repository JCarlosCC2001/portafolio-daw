import { info } from './info.js';

const Contenedor = document.querySelector(".Contenido");
const urlParams = new URLSearchParams(window.location.search);
const semana = urlParams.get('semana');

const Navegador = document.createElement("nav");
const BotonAnt = document.createElement("button");
BotonAnt.textContent = "Anterior";
const BotonInicio = document.createElement("button");
BotonInicio.textContent = "Inicio";
BotonInicio.addEventListener("click", function () {
    window.location.href = "index.html";
});
const BotonSig = document.createElement("button");
BotonSig.textContent = "Siguiente";
Navegador.appendChild(BotonAnt);
Navegador.appendChild(BotonInicio);
Navegador.appendChild(BotonSig);
Contenedor.appendChild(Navegador);

const Semana = document.createElement("p");
Semana.className = "TituloGeneral";
Semana.textContent = semana;

const Temas = document.createElement("div");
const CuadroTema = document.createElement("div");
for (var Tema in info.Contenido[semana].Temas) {

    const TextTema = document.createElement("p");
    TextTema.className = "Titulo";
    TextTema.textContent = Tema;
    CuadroTema.appendChild(TextTema);

    for (var Area in info.Contenido[semana].Temas[Tema]) {
        const TextArea = document.createElement("p");
        TextArea.className = "SubTitulo";
        TextArea.textContent = Area;
        const TextContenido = document.createElement("p");
        TextContenido.className = "Texto";
        TextContenido.textContent = info.Contenido[semana].Temas[Tema][Area];
        CuadroTema.appendChild(TextArea);
        CuadroTema.appendChild(TextContenido);
    }
}

Temas.appendChild(CuadroTema);

Contenedor.appendChild(Semana);
Contenedor.appendChild(Temas);