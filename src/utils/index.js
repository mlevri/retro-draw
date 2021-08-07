export const COLORS = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'white',
  'black'
];

export function buildCellList() {
  const cellList = [];

  for (let i = 0; i < 64; i++) {
    cellList.push({
      color: null
    });
  }

  return cellList;
}

/**
 * COLORS should be an array of color strings,
 * approximately 8 of them.
 */

/**
 * buildCellList creates and returns an 
 * array of empty cell objects
 */