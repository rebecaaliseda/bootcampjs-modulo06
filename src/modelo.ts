interface Partida {
  totalPuntosJugador: number;
  estadoPartida: States;
  mensaje: string;
}

export const partida: Partida = {
  totalPuntosJugador: 0,
  estadoPartida: 'jugando',
  mensaje: '',
};

export type States = 'jugando' | 'plantado' | 'ganado' | 'gameOver';

// Modifica la puntuación total del jugador
export const setTotalPuntosJugador = (puntuacionTotalJugador: number) => {
  partida.totalPuntosJugador = puntuacionTotalJugador;
};

// Modifica el estado de la partida
export const setEstadoPartida = (estado: States) => {
  partida.estadoPartida = estado;
};

// Modifica el mensaje a mostrar
export const setMensaje = (nuevoMensaje: string) => {
  partida.mensaje = nuevoMensaje;
};
