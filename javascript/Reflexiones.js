import { info } from './info.js';

const Selec_Contenido = document.querySelector(".Reflexion");

const Contenedor = document.createElement("div");
Contenedor.className = "Reflexiones";

const Titulo = document.createElement("p");
Titulo.className = "Titulo";
Titulo.textContent = "Reflexiones";
const Sem_Conten = document.createElement("div");
Sem_Conten.className = "Sem_Conten";

const C_Semanas = document.createElement("div");
C_Semanas.className = "Semanas";

const Contenido = document.createElement("div");
Contenido.className = "Contenidos";

Sem_Conten.append(C_Semanas);
Sem_Conten.append(Contenido);

for (var semana in info.Contenido) {
    if (info.Contenido.hasOwnProperty(semana)) {
        //Botones por semana
        const Semana = document.createElement("button");
        Semana.className = "Semana";
        Semana.id = semana;
        Semana.addEventListener("click", function () {
            Mostrar(Semana.id);
        });
        Semana.textContent = semana;

        //contenido
        const Titulo_Contenido_1 = document.createElement("p");
        Titulo_Contenido_1.className = "Titulo_Contenido";
        Titulo_Contenido_1.id = semana
        Titulo_Contenido_1.textContent = "¿Qué aprendió?";

        const Contenido_1 = document.createElement("p");
        Contenido_1.className = "Contenido";
        Contenido_1.id = semana
        Contenido_1.textContent = info.Contenido[semana]["¿Qué aprendió?"];


        const Titulo_Contenido_2 = document.createElement("p");
        Titulo_Contenido_2.className = "Titulo_Contenido";
        Titulo_Contenido_2.id = semana
        Titulo_Contenido_2.textContent = "¿Cómo aprendió?";

        const Contenido_2 = document.createElement("p");
        Contenido_2.className = "Contenido";
        Contenido_2.id = semana
        Contenido_2.textContent = info.Contenido[semana]["¿Cómo aprendió?"];


        C_Semanas.appendChild(Semana);
        Contenido.appendChild(Titulo_Contenido_1);
        Contenido.appendChild(Contenido_1);
        Contenido.appendChild(Titulo_Contenido_2);
        Contenido.appendChild(Contenido_2);
    }
}

Contenedor.appendChild(Titulo);
Contenedor.appendChild(Sem_Conten);

Selec_Contenido.appendChild(Contenedor);
Mostrar("Semana 1");
function Mostrar(sem) {

    var Selc_Title_active = Selec_Contenido.querySelectorAll('[class="Titulo_Contenido_Active"]');
    Selc_Title_active.forEach(element => {
        element.classList.remove("Titulo_Contenido_Active");
        element.classList.add("Titulo_Contenido");
    });

    var Selc_Cont_active = Selec_Contenido.querySelectorAll('[class="Contenido_Active"]');
    Selc_Cont_active.forEach(element => {
        element.classList.remove("Contenido_Active");
        element.classList.add("Contenido");
    });

    var Selc_Title = Selec_Contenido.querySelectorAll('[class="Titulo_Contenido"][id="'+sem+'"]');
    Selc_Title.forEach(element => {
        element.classList.remove("Titulo_Contenido");
        element.classList.add("Titulo_Contenido_Active");
    });

    var Selc_Cont = Selec_Contenido.querySelectorAll('[class="Contenido"][id="'+sem+'"]');
    Selc_Cont.forEach(element => {
        element.classList.remove("Contenido");
        element.classList.add("Contenido_Active");
    });

}