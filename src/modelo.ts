interface Partida {
  totalPuntosJugador: number;
}

export const partida: Partida = {
  totalPuntosJugador: 0,
};

export type States = 'jugando' | 'plantado' | 'ganado' | 'gameOver';
