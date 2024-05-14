import { partida } from './modelo';
import { muestraPuntuacion, pedirCarta, nuevaPartida, mePlanto, siHubierasSeguido } from './ui';

const initButtons = () => {
  const botonPedirCarta = document.getElementById('nueva-carta');
  const botonPlantarse = document.getElementById('me-planto');
  const botonSiHubierasSeguido = document.getElementById('si-hubieras-seguido');
  const botonJugarNuevaPartida = document.getElementById('jugar-nueva-partida');

  if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.addEventListener('click', pedirCarta);
  }
  if (botonJugarNuevaPartida && botonJugarNuevaPartida instanceof HTMLButtonElement) {
    botonJugarNuevaPartida.addEventListener('click', nuevaPartida);
  }
  if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.addEventListener('click', mePlanto);
  }
  if (botonSiHubierasSeguido && botonSiHubierasSeguido instanceof HTMLButtonElement) {
    botonSiHubierasSeguido.addEventListener('click', siHubierasSeguido);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  muestraPuntuacion(partida.totalPuntosJugador);
  initButtons();
});
