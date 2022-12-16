export const config = {
  shiptypes: {
    carrier: { size: 5, count: 1 },
    battleship: { size: 5, count: 1 },
    cruiser: { size: 4, count: 1 },
    submarine: { size: 3, count: 1 },
    destroyer: { size: 3, count: 1 },
  },
  layout: [
    {
      ship: 'carrier',
      positions: [
        [2, 9],
        [3, 9],
        [4, 9],
        [5, 9],
        [6, 9],
      ],
    },
    {
      ship: 'battleship',
      positions: [
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
      ],
    },
    {
      ship: 'cruiser',
      positions: [
        [1, 2],
        [2, 2],
        [3, 2],
      ],
    },
    {
      ship: 'submarine',
      positions: [
        [6, 5],
        [7, 5],
        [8, 5],
      ],
    },
    {
      ship: 'battleship',
      positions: [
        [3, 5],
        [3, 6],
        [3, 7],
      ],
    },
  ],
};
