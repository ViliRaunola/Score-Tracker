export type wordPointTableType = {
  multiplier: number,
  text: string,
}

export type charPoint = {
  char: string,
  points: number,
}

export const wordPointTable = [
  {
    multiplier: 1,
    text: 'Ei kerrointa',
  },
  {
    multiplier: 2,
    text: '2x sana pisteet',
  },
  {
    multiplier: 3,
    text: '3x sana pisteet',
  },
]

export const findPointForChar = (char: string): number => {
  let point = 0
  for (let i = 0; i < charPoints.length; i++) {
    const element = charPoints[i]
    if (element.char === char) {
      point = element.points
      break
    }
  }
  return point
}

export const charPoints = [
  {
    char: 'a',
    points: 1,
  },
  {
    char: 'b',
    points: 8,
  },
  {
    char: 'c',
    points: 10,
  },
  {
    char: 'd',
    points: 7,
  },
  {
    char: 'e',
    points: 1,
  },
  {
    char: 'f',
    points: 8,
  },
  {
    char: 'g',
    points: 8,
  },
  {
    char: 'h',
    points: 4,
  },
  {
    char: 'i',
    points: 1,
  },
  {
    char: 'j',
    points: 4,
  },
  {
    char: 'k',
    points: 2,
  },
  {
    char: 'l',
    points: 2,
  },
  {
    char: 'm',
    points: 3,
  },
  {
    char: 'n',
    points: 1,
  },
  {
    char: 'o',
    points: 2,
  },
  {
    char: 'p',
    points: 4,
  },
  {
    char: 'r',
    points: 4,
  },
  {
    char: 's',
    points: 1,
  },
  {
    char: 't',
    points: 1,
  },
  {
    char: 'u',
    points: 3,
  },
  {
    char: 'v',
    points: 4,
  },
  {
    char: 'y',
    points: 4,
  },
  {
    char: 'ä',
    points: 2,
  },
  {
    char: 'ö',
    points: 7,
  },
  {
    char: 'w',
    points: 8,
  },
]
