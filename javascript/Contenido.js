import { Semanas } from './Semanas.js';

const Selec_Contenido = document.querySelector(".Contenido");

const Sub_Title = document.createElement("div");
Sub_Title.className = "sub_title";
Sub_Title.textContent = "TABLA DE CONTENIDOS";
const Contenedor = document.createElement("div");
Contenedor.className = "contenedor";

for (var semana in Semanas) {
    if (Semanas.hasOwnProperty(semana)) {
        const C_Semana = document.createElement("div");
        C_Semana.className = "Semana";
        C_Semana.id = semana;
        const Sem = document.createElement("div");
        Sem.textContent = semana;
        const Titulo = document.createElement("div");
        Titulo.textContent = Semanas[semana]["Titulo"];
        const botones = document.createElement("div");
        botones.className = "Botones";

        const boton_D = document.createElement("button");
        boton_D.className = "boton";
        boton_D.id = semana;
        boton_D.addEventListener("click", function () {
            Mostrar(boton_D.id, 'Definiciones');
        });
        boton_D.textContent = "D";

        const boton_P = document.createElement("button");
        boton_P.className = "boton";
        boton_P.id = semana;
        boton_P.addEventListener("click", function () {
            Mostrar(boton_P.id, 'Procedimiento');
        });
        boton_P.textContent = "P";

        const boton_R = document.createElement("button");
        boton_R.className = "boton";
        boton_R.id = semana;
        boton_R.addEventListener("click", function () {
            Mostrar(boton_R.id, 'Resultados');
        });
        boton_R.textContent = "R";

        botones.appendChild(boton_D);
        botones.appendChild(boton_P);
        botones.appendChild(boton_R);

        const C_Text = document.createElement("div");
        C_Text.classList = "Textos";
        for (var propiedad in Semanas[semana]) {
            if (propiedad == "Definiciones" || propiedad == "Procedimiento" || propiedad == "Resultados") {
                if (Semanas[semana].hasOwnProperty(propiedad)) {
                    const Subtitulo = document.createElement("div");
                    Subtitulo.textContent = propiedad;
                    const Text = document.createElement("div");
                    Text.textContent = Semanas[semana][propiedad];
                    if (propiedad == "Definiciones") {
                        Subtitulo.className = "titulo_propiedad_active";
                        Text.className = "texto_propiedad_active";
                    } else {
                        Subtitulo.className = "titulo_propiedad";
                        Text.className = "texto_propiedad";
                    }
                    Subtitulo.id = propiedad;
                    Text.id = propiedad;
                    C_Text.appendChild(Subtitulo);
                    C_Text.appendChild(Text);
                }
            }
        }

        C_Semana.appendChild(Sem);
        C_Semana.appendChild(Titulo);
        C_Semana.appendChild(botones);
        C_Semana.appendChild(C_Text);

        Contenedor.appendChild(C_Semana);
    }
}

Selec_Contenido.appendChild(Sub_Title);
Selec_Contenido.appendChild(Contenedor);

function Mostrar(sem, prop) {
    console.log(sem)
    console.log(prop)

    var Selec_Text = document.querySelector('[class="Contenido"] [id="' + sem + '"] [class="Textos"]')

    var Selec_Titulo = Selec_Text.querySelector('.titulo_propiedad_active')
    Selec_Titulo.classList.remove("titulo_propiedad_active");
    Selec_Titulo.classList.add("titulo_propiedad");

    var Selec_Texto = Selec_Text.querySelector('.texto_propiedad_active')
    Selec_Texto.classList.remove("texto_propiedad_active");
    Selec_Texto.classList.add("texto_propiedad");

    var Selec_Titulo_Activite = Selec_Text.querySelector('.titulo_propiedad#' + prop);
    Selec_Titulo_Activite.classList.remove("titulo_propiedad");
    Selec_Titulo_Activite.classList.add("titulo_propiedad_active");

    var Selec_Texto_Activite = Selec_Text.querySelector('.texto_propiedad#' + prop)
    Selec_Texto_Activite.classList.remove("texto_propiedad");
    Selec_Texto_Activite.classList.add("texto_propiedad_active");

}