// variables globales
let ataqueJugador
let ataqueEnemigo
let vidaJugador = 3;
let vidaEnemigo = 3;
let victorias = localStorage.getItem('victorias') ? parseInt(localStorage.getItem('victorias')) : 0;
let derrotas = localStorage.getItem('derrotas') ? parseInt(localStorage.getItem('derrotas')) : 0;
// carga de la pagina del juego
window.addEventListener('load', iniciarJuego);

// funciones al clickear el boton de seleccionar mascota y ataques
function iniciarJuego(){
  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'none';

  let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'none';

  let sectionMensajes = document.getElementById('mensajes');
    sectionMensajes.style.display = 'none';

  let hMensaje = document.getElementById('hMensajes');
    hMensaje.style.display = 'none';

// carga de boton seleccionar después de carga de la pagina
  let btnSeleccionar = document.getElementById('btn-seleccionar');
  btnSeleccionar.addEventListener('click', seleccionarMascota);

// carga al clickear los botones de ataque (fuego, agua, tierra, aire, trueno)
    let btnFuego = document.getElementById('btn-fuego');
    btnFuego.addEventListener('click', ataqueFuego);

    let btnAgua = document.getElementById('btn-agua');
    btnAgua.addEventListener('click', ataqueAgua);

    let btnTrueno = document.getElementById('btn-trueno');
    btnTrueno.addEventListener('click', ataqueTrueno);

    let btnAire = document.getElementById('btn-aire');
    btnAire.addEventListener('click', ataqueAire);

    let btnTierra = document.getElementById('btn-tierra');
    btnTierra.addEventListener('click', ataqueTierra);

}
// eventos al seleccionar una mascota y mostrar alerta con el nombre seleccionado
function seleccionarMascota(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'block';

    let sectionMensajes = document.getElementById('mensajes');
    sectionMensajes.style.display = 'block';

    let hMensaje = document.getElementById('hMensajes');
    hMensaje.style.display = 'block';

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display = 'none';

    let inputKapichu = document.getElementById('kapichu');
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let inputLangostelvis = document.getElementById('langostelvis');
    let inputTucupalma = document.getElementById('tucupalma');
    let inputPydos = document.getElementById('pydos');
    let spanMascota = document.getElementById('mascota-jugador');

    if(inputKapichu.checked){
      spanMascota.innerHTML = 'Kapichu';
    } else if(inputHipodoge.checked){
        spanMascota.innerHTML = 'Hipodoge';
    } else if(inputCapipepo.checked){
        spanMascota.innerHTML = 'Capipepo';
    } else if(inputRatigueya.checked){
        spanMascota.innerHTML = 'Ratigueya';
    } else if(inputLangostelvis.checked){
        spanMascota.innerHTML = 'Langostelvis';
    } else if(inputTucupalma.checked){
        spanMascota.innerHTML = 'Tucupalma';
    } else if(inputPydos.checked){
        spanMascota.innerHTML = 'Pydos';
    } else{
      alert("Debes elegir una mascota!");
    }

    seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatorios = aleatorios(1, 7);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

    if(mascotaAleatorios == 1){
        spanMascotaEnemigo.innerHTML = 'Kapichu';
    } else if(mascotaAleatorios == 2){
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    } else if(mascotaAleatorios == 3){
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    } else if(mascotaAleatorios == 4){
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    } else if(mascotaAleatorios == 5){
        spanMascotaEnemigo.innerHTML = 'Langostelvis';
    } else if(mascotaAleatorios == 6){
        spanMascotaEnemigo.innerHTML = 'Tucupalma';
    } else{
        spanMascotaEnemigo.innerHTML = 'Pydos';
    }
}
function aleatorios(min, max){
   return Math.floor(Math.random() * (max - min + 1 ) + min);
}
// funciones para generar los ataques del jugador y la maquina
function ataqueFuego() {
    ataqueJugador = "🔥 Llama tornado 🔥";
    ataqueAleatorioEnemigo();
    Swal.fire({
        title: '🔥 ¡Fuego desatado! 🔥',
        html: `<b>Usaste:</b> ${ataqueJugador} <br>¡Todo arde! 🔥🐉`,
        background: '#ffebcd',
        showConfirmButton: false,
        timer: 1500
    });
}

function ataqueAgua() {
    ataqueJugador = "💧 Tormenta marina 💧";
    ataqueAleatorioEnemigo();
    Swal.fire({
        title: '💦 ¡Inundación imparable! 💦',
        html: `<b>Usaste:</b> ${ataqueJugador} <br>¡Las olas rugen! 🌊🐟`,
        background: '#d0f0ff',
        showConfirmButton: false,
        timer: 1500
    });
}
function ataqueTrueno() {
    ataqueJugador = "⚡ Electro onda ⚡";
    ataqueAleatorioEnemigo();
    Swal.fire({
        title: '⚡ ¡Rayo impactante! ⚡',
        html: `<b>Usaste:</b> ${ataqueJugador} <br>¡El cielo truena! 🌩️⚡`,
        background: '#fff7d6',
        showConfirmButton: false,
        timer: 1500
    });
}
function ataqueAire() {
    ataqueJugador = "🌪️ Huracán 🌪️";
    ataqueAleatorioEnemigo();
    Swal.fire({
        title: '🌬️ ¡Vientos furiosos! 🌬️',
        html: `<b>Usaste:</b> ${ataqueJugador} <br>¡El aire ruge! 💨🦅`,
        background: '#e6f7ff',
        showConfirmButton: false,
        timer: 1500
    });
}

function ataqueTierra() {
    ataqueJugador = "🌋 Tormenta de arena 🌋";
    ataqueAleatorioEnemigo();
    Swal.fire({
        title: '🌍 ¡Terremoto en camino! 🌍',
        html: `<b>Usaste:</b> ${ataqueJugador} <br>¡La tierra tiembla! 🪨🌪️`,
        background: '#f5e6d3',
        showConfirmButton: false,
        timer: 1500
    });
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorios = aleatorios(1, 5);

    if (ataqueAleatorios == 1) {
        ataqueEnemigo = "🔥 Llama tornado 🔥";
    } else if (ataqueAleatorios == 2) {
        ataqueEnemigo = "💧 Tormenta marina 💧";
    } else if (ataqueAleatorios == 3) {
        ataqueEnemigo = "⚡ Electro onda ⚡";
    } else if (ataqueAleatorios == 4) {
        ataqueEnemigo = "🌪️ Huracán 🌪️";
    } else if (ataqueAleatorios == 5) {
        ataqueEnemigo = "🌋 Tormenta de arena 🌋";
    }

    Swal.fire({
        title: '⚔️ ¡Choque de poderes! ⚔️',
        html: `
            <b>Tu ataque:</b> ${ataqueJugador}<br>
            <b>Ataque enemigo:</b> ${ataqueEnemigo}<br><br>
            ¿Quién ganará este duelo? 🤜🤛
        `,
        background: '#ffe4e1',
        timer: 1800,
        showConfirmButton: false
    });

    crearMensajes();
    mostrarGanador();
}
// funciones para crear mensajes de los ataques seleccionados
function crearMensajes(){
    let sectionMensajes = document.getElementById('mensajes');//tomamos el section mensaje para crear/asignar el nuevo mensaje de juego

    let parrafo = document.createElement("p"); //crear variable para el mensaje desde js para mostrarse por html en una etiqueta p = parrafo
    parrafo.innerHTML = `Tu mascota ataco con ${ataqueJugador} , la mascota del enemigo ataco con ${ataqueEnemigo}.`; // mostramos el mensaje por medio de js en el html en la etiqueta p = parrafo del section mensajes
    sectionMensajes.appendChild(parrafo); // agregamos el mensaje creado a la section de mensajes de html
}
function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes');//tomamos el section mensaje para crear/asignar el nuevo mensaje de juego
    let parrafo = document.createElement("p"); //crear variable para el mensaje desde js para mostrarse por html en una etiqueta p = parrafo
    parrafo.innerHTML = resultadoFinal; // mostramos el mensaje por medio de js en el html en la etiqueta p = parrafo del section mensajes
    sectionMensajes.appendChild(parrafo); // agregamos el mensaje creado a la section de mensajes de html
}
// funciones para mostrar el ganador del juego
function mostrarGanador() {
    let sectionMensajes = document.getElementById('mensajes');
    let parrafo = document.createElement("p");

    // Obtén resultados solo una vez
    let resultados = determinarResultado(ataqueJugador, ataqueEnemigo);

    parrafo.innerHTML = `
        Tu mascota atacó con ${ataqueJugador}, la mascota del enemigo atacó con ${ataqueEnemigo}.<br>
        <strong>Tu resultado:</strong> ${resultados.resultadoJugador}<br>
        <strong>Resultado del enemigo:</strong> ${resultados.resultadoEnemigo}.
    `;
    sectionMensajes.appendChild(parrafo);

    Swal.fire({
        title: '⚔️ Resultado del combate ⚔️',
        html: `
            <p><strong>Tu ataque:</strong> ${ataqueJugador}</p>
            <p><strong>Ataque enemigo:</strong> ${ataqueEnemigo}</p>
            <hr>
            <p><strong>Tu resultado:</strong> ${resultadoJugador}</p>
            <p><strong>Resultado del enemigo:</strong> ${resultadoEnemigo}</p>
        `,
        icon: resultadoJugador.includes("Ganaste") ? 'success' :
              resultadoJugador.includes("Perdiste") ? 'error' : 'info',
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        allowEscapeKey: false
    });

}
function determinarResultado(ataqueJugador, ataqueEnemigo) {
    let resultadoJugador = "";
    let resultadoEnemigo = "";

    if (ataqueJugador === ataqueEnemigo) {
        resultadoJugador = "Empate, ambos ataques tienen la misma fuerza.";
        resultadoEnemigo = "Empate, ambos ataques tienen la misma fuerza.";
    } else if (
        (ataqueJugador === "🔥 Llama tornado 🔥" && ataqueEnemigo === "🌋 Tormenta de arena 🌋") ||
        (ataqueJugador === "💧 Tormenta marina 💧" && ataqueEnemigo === "🔥 Llama tornado 🔥") ||
        (ataqueJugador === "🌋 Tormenta de arena 🌋" && ataqueEnemigo === "💧 Tormenta marina 💧") ||
        (ataqueJugador === "🌪️ Huracán 🌪️" && ataqueEnemigo === "⚡ Electro onda ⚡") ||
        (ataqueJugador === "⚡ Electro onda ⚡" && ataqueEnemigo === "🌋 Tormenta de arena 🌋")
    ) {
        resultadoJugador = "Ganaste, tu ataque fue más fuerte que el del enemigo.";
        resultadoEnemigo = "Perdí, tu ataque fue más fuerte que el mío.";
        vidaEnemigo--; // ✅ Descontar vida al enemigo
        actualizarVidas();

    } else {
        resultadoJugador = "Perdiste, tu ataque fue más débil que el del enemigo.";
        resultadoEnemigo = "Gané, mi ataque fue más fuerte que el tuyo.";
        vidaJugador--; // ✅ Descontar vida al jugador
        actualizarVidas();
    }

    return {
        resultadoJugador,
        resultadoEnemigo,
    };


}
function revisarVida() {
    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'block';
    //let spanVidasJugador = document.getElementById('vidaJugador');
    //let spanVidasEnemigo = document.getElementById('vidaEnemigo');
    if (vidaJugador == 0) {
        Swal.fire({
            title: '💀 ¡Perdiste la partida! 💀',
            text: 'Tu mascota se ha debilitado. 🥹',
            icon: 'error',
            confirmButtonText: 'debes reiniciar la partida'
        }).then(() => {
            reiniciarJuego();
            deshabilitarBotones();
        });

    } else if (vidaEnemigo == 0) {
        Swal.fire({
            title: '🎉 ¡Ganaste la partida! 🎉',
            text: 'La mascota enemiga se ha debilitado. 🥳',
            icon: 'success',
            confirmButtonText: 'debes reiniciar la partida'
        }).then(() => {
            reiniciarJuego();
            deshabilitarBotones();
        })
    }
    acumulado();
}
function actualizarVidas() {
    document.getElementById('vidaJugador').innerText = vidaJugador;
    document.getElementById('vidaEnemigo').innerText = vidaEnemigo;

    if (vidaJugador <= 0) {
        revisarVida();
    } else if (vidaEnemigo <= 0) {
       revisarVida();
    }
}
// funcion para deshabilitar botones
function deshabilitarBotones(){
    document.getElementById('btn-fuego').disabled = true;
    document.getElementById('btn-agua').disabled = true;
    document.getElementById('btn-trueno').disabled = true;
    document.getElementById('btn-aire').disabled = true;
    document.getElementById('btn-tierra').disabled = true;
}
function habilitarBotones(){
    document.getElementById('btn-fuego').disabled = false;
    document.getElementById('btn-agua').disabled = false;
    document.getElementById('btn-trueno').disabled = false;
    document.getElementById('btn-aire').disabled = false;
    document.getElementById('btn-tierra').disabled = false;
}
//funcion para mostrar acumulado de victorias y derrotas
function acumulado(){
    let spanVictorias = document.getElementById('victorias');
    let spanDerrotas = document.getElementById('derrotas');

    if(vidaJugador == 0){
        derrotas++;
        localStorage.setItem('derrotas', derrotas);
        spanDerrotas.innerHTML = derrotas;
    } else if(vidaEnemigo == 0){
        victorias++;
        localStorage.setItem('victorias', victorias);
        spanVictorias.innerHTML = victorias;
    }
}
// Cargar los valores guardados al iniciar la página
window.onload = function() {
    document.getElementById('victorias').innerHTML = localStorage.getItem('victorias') || 0;
    document.getElementById('derrotas').innerHTML = localStorage.getItem('derrotas') || 0;
};
// funcion reiniciar juego
 function reiniciarJuego(){
    habilitarBotones();
    let btnReiniciar = document.getElementById('btn-reiniciar');
    btnReiniciar.addEventListener('click', function(){
        vidaJugador = 3;
        vidaEnemigo = 3;
        window.location.reload();
     });
 }
//funcion reiniciar contador a 0
function resetearContador() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡Esto reiniciará el contador de victorias y derrotas!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, resetear',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('victorias');
            localStorage.removeItem('derrotas');

            victorias = 0;
            derrotas = 0;

            document.getElementById('victorias').textContent = victorias;
            document.getElementById('derrotas').textContent = derrotas;

            Swal.fire({
                title: '¡Contador reiniciado!',
                text: 'Las victorias y derrotas han sido reiniciadas.',
                icon: 'success',
                confirmButtonText: '¡Perfecto!'
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const btnComoJugar = document.getElementById('btn-como-jugar')
    const modalComoJugar = document.getElementById('modal-como-jugar')
    const btnCerrarModal = document.getElementById('btn-cerrar-modal')

    btnComoJugar.addEventListener('click', () => {
        modalComoJugar.classList.add('show')
    })

    btnCerrarModal.addEventListener('click', () => {
        modalComoJugar.classList.remove('show')
    })

    window.addEventListener('click', (event) => {
        if (event.target === modalComoJugar) {
            modalComoJugar.classList.remove('show')
        }
    })
})

// fin del juego