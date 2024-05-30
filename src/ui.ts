import { partida, setTotalPuntosJugador, setEstadoPartida, setMensaje } from './modelo';

import {
  getMessage,
  dameCarta,
  calcularNumPuntos,
  sumarPuntuacionTotal,
  crearURLCarta,
} from './motor';

export const cartasJugador = document.getElementById('cartas');

export const desactivarBoton = (botonId: string): void => {
  const boton = document.getElementById(botonId);
  if (boton && boton instanceof HTMLButtonElement) {
    boton.disabled = true;
  }
};

export const activarBoton = (botonId: string): void => {
  const boton = document.getElementById(botonId);
  if (boton && boton instanceof HTMLButtonElement) {
    boton.disabled = false;
  }
};

export const mostrarMensajeFinal = (mensaje: string): void => {
  let mensajeFinal = document.getElementById('mensaje');
  if (mensajeFinal && mensajeFinal instanceof HTMLDivElement) {
    mensajeFinal.innerHTML = mensaje;
    if (partida.estadoPartida === 'gameOver') {
      mensajeFinal.classList.add('game-over');
    } else {
      mensajeFinal.classList.remove('game-over');
    }
  }
};

export const pedirCarta = (): void => {
  let carta: number = dameCarta();
  let numPuntos = calcularNumPuntos(carta);
  let numPuntuacionTotal = sumarPuntuacionTotal(numPuntos);
  setTotalPuntosJugador(numPuntuacionTotal);
  muestraPuntuacion(partida.totalPuntosJugador);
  if (cartasJugador && cartasJugador instanceof HTMLDivElement) {
    muestraCarta(carta, cartasJugador);
  }
  comprobarPuntuacion();
};

export const finPartidaButtons = (): void => {
  desactivarBoton('nueva-carta');
  desactivarBoton('me-planto');
  activarBoton('jugar-nueva-partida');
};

export const gameOverButtons = (): void => {
  finPartidaButtons();
  desactivarBoton('si-hubieras-seguido');
};

export const comprobarPuntuacion = (): void => {
  if (partida.totalPuntosJugador === 7.5) {
    setEstadoPartida('ganado');
    setMensaje(getMessage(partida.estadoPartida));
    mostrarMensajeFinal(partida.mensaje);
    finPartidaButtons();
  }
  if (partida.totalPuntosJugador > 7.5) {
    setEstadoPartida('gameOver');
    setMensaje(getMessage(partida.estadoPartida));
    mostrarMensajeFinal(partida.mensaje);
    gameOverButtons();
  }
};

export const muestraCarta = (carta: number, htmlDiv: HTMLDivElement): void => {
  let rutaCarta = crearURLCarta(carta);
  definirDivCartaActual(rutaCarta, htmlDiv);
};

export const definirDivCartaActual = (rutaCarta: string, htmlDiv: HTMLDivElement) => {
  if (cartasJugador && cartasJugador instanceof HTMLElement) {
    const imgCarta = document.createElement('img');
    imgCarta.src = rutaCarta;
    imgCarta.alt = 'Carta actual';
    imgCarta.classList.add('carta-jugador');

    if (htmlDiv && htmlDiv instanceof HTMLDivElement) {
      htmlDiv.append(imgCarta);
    }
  }
};

export const muestraPuntuacion = (totalPuntosJugador: number): void => {
  const totalPuntos = document.getElementById('total-puntos');
  if (totalPuntos && totalPuntos instanceof HTMLElement) {
    totalPuntos.innerHTML = `Total de puntos: ${totalPuntosJugador} puntos`;
  }
};

export const nuevaPartidaButtons = (): void => {
  activarBoton('nueva-carta');
  activarBoton('me-planto');
  desactivarBoton('si-hubieras-seguido');
};

export const nuevaPartida = (): void => {
  setTotalPuntosJugador(0);
  setEstadoPartida('jugando');
  setMensaje('');

  muestraPuntuacion(partida.totalPuntosJugador);
  if (cartasJugador) {
    cartasJugador.innerHTML = '';
  }
  mostrarMensajeFinal('');
  nuevaPartidaButtons();
};

export const mePlantoButtons = (): void => {
  finPartidaButtons();
  activarBoton('si-hubieras-seguido');
};

export const mePlanto = (): void => {
  mePlantoButtons();
  setEstadoPartida('plantado');
  setMensaje(getMessage(partida.estadoPartida));
  mostrarMensajeFinal(partida.mensaje);
};

export const siHubierasSeguido = (): void => {
  pedirCarta();
  desactivarBoton('si-hubieras-seguido');
};
