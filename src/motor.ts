import { partida, States } from './modelo';

export const getMessage = (state: States): string => {
  let mensaje: string = '';
  switch (state) {
    case 'jugando':
      mensaje = 'Estás jugando';
      break;
    case 'plantado':
      mensaje = obtenerMensajeTrasPlantarse();
      break;
    case 'ganado':
      mensaje = '¡Lo has clavado! ¡Enhorabuena!';
      break;
    case 'gameOver':
      mensaje = '¡Game Over!😢';
      break;
    default:
      mensaje = '';
      break;
  }
  return mensaje;
};

export const dameCarta = (): number => {
  let numeroAleatorio = Math.ceil(Math.random() * 10);
  return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
};
export const calcularNumPuntos = (carta: number): number => {
  let numPuntos = carta > 7 ? 0.5 : carta;
  return numPuntos;
};

export const sumarPuntuacionTotal = (numPuntos: number): number => {
  return partida.totalPuntosJugador + numPuntos;
};
export const crearURLCarta = (numCarta: number): string => {
  let carta: string = '';
  switch (numCarta) {
    case 1:
      carta = '1_as';
      break;
    case 2:
      carta = '2_dos';
      break;
    case 3:
      carta = '3_tres';
      break;
    case 4:
      carta = '4_cuatro';
      break;
    case 5:
      carta = '5_cinco';
      break;
    case 6:
      carta = '6_seis';
      break;
    case 7:
      carta = '7_siete';
      break;
    case 10:
      carta = '10_sota';
      break;
    case 11:
      carta = '11_caballo';
      break;
    case 12:
      carta = '12_rey';
      break;
    default:
      carta = 'No se que ha pasado, pero no deberías estar aquí';
  }
  const rutaCarta = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/${carta}-copas.jpg`;
  return rutaCarta;
};

export const obtenerMensajeTrasPlantarse = (): string => {
  let txtMensaje: string = '';
  if (partida.totalPuntosJugador <= 4.5) {
    txtMensaje = 'Has sido muy conservador....';
  }
  if (partida.totalPuntosJugador >= 5) {
    txtMensaje = 'Te ha entrado el canguelo eh?';
  }
  if (partida.totalPuntosJugador >= 6) {
    txtMensaje = 'Casi, casi ...';
  }
  return txtMensaje;
};

export const obtenerPuntuacionJugador = () => {
  return partida.totalPuntosJugador;
};

export const comprobarPartida = (): States => {
  if (obtenerPuntuacionJugador() === 7.5) {
    return 'ganado';
  }
  return obtenerPuntuacionJugador() > 7.5 ? 'gameOver' : 'jugando';
};
