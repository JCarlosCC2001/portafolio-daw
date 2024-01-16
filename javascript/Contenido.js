import { info } from './info.js';

const Selec_Contenido = document.querySelector(".Contenido");

const Sub_Title = document.createElement("p");
Sub_Title.className = "sub_title";
Sub_Title.textContent = "TABLA DE CONTENIDOS";
const Contenedor = document.createElement("div");
Contenedor.className = "contenedor";

console.log(info.Contenido);

for (var semana in info.Contenido) {
    const CardSemana = document.createElement("div");
    CardSemana.className = "Semana";

    const TextSemana = document.createElement("p");
    TextSemana.className = "SubTituloPequeño"
    TextSemana.textContent = semana;
    CardSemana.appendChild(TextSemana);
    for (var Tema in info.Contenido[semana].Temas) {
        const TextTema = document.createElement("p");
        TextTema.textContent = "* " + Tema;
        CardSemana.appendChild(TextTema);
    }
    const ButtonVerMas = document.createElement("button");
    ButtonVerMas.textContent = "Ver Mas";
    ButtonVerMas.id = semana;
    ButtonVerMas.addEventListener("click", function () {
        window.location.href = "Semana.html?semana=" + encodeURIComponent(ButtonVerMas.id);
    });
    CardSemana.appendChild(ButtonVerMas);

    Contenedor.appendChild(CardSemana);
}

Selec_Contenido.appendChild(Sub_Title);
Selec_Contenido.appendChild(Contenedor);