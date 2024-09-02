import { useState, useEffect } from "react";

export interface TileNode {
  [key: string]: number[];
  1: number[];
  2: number[];
  3: number[];
  4: number[];
  5: number[];
  6: number[];
  7: number[];
  8: number[];
  9: number[];
  10: number[];
  11: number[];
  12: number[];
  13: number[];
  14: number[];
  15: number[];
  16: number[];
  17: number[];
  18: number[];
  19: number[];
  20: number[];
  21: number[];
  22: number[];
  23: number[];
  24: number[];
  25: number[];
  26: number[];
  27: number[];
  28: number[];
  29: number[];
  30: number[];
  31: number[];
  32: number[];
  33: number[];
  34: number[];
  35: number[];
  36: number[];
  37: number[];
  38: number[];
  39: number[];
  40: number[];
  41: number[];
  42: number[];
  43: number[];
  44: number[];
  45: number[];
  46: number[];
  47: number[];
  48: number[];
  49: number[];
  50: number[];
  51: number[];
  52: number[];
  R1: number[];
  R2: number[];
  R3: number[];
  R4: number[];
  R5: number[];
  R6: number[];
  G1: number[];
  G2: number[];
  G3: number[];
  G4: number[];
  G5: number[];
  G6: number[];
  Y1: number[];
  Y2: number[];
  Y3: number[];
  Y4: number[];
  Y5: number[];
  Y6: number[];
  B1: number[];
  B2: number[];
  B3: number[];
  B4: number[];
  B5: number[];
  B6: number[];
  R01: number[];
  R02: number[];
  R03: number[];
  R04: number[];
  G01: number[];
  G02: number[];
  G03: number[];
  G04: number[];
  Y01: number[];
  Y02: number[];
  Y03: number[];
  Y04: number[];
  B01: number[];
  B02: number[];
  B03: number[];
  B04: number[];
}

export const useSize = () => {
  const [size, setSize] = useState<number>(() => {
    if (window.innerWidth > 600) {
      return 500;
    } else if (window.innerWidth > 460) {
      return 400;
    } else {
      return 300;
    }
  });

  const [tileMap, setTileMap] = useState<TileNode>(() => {
    if (window.innerWidth > 600) {
      return TM500;
    } else if (window.innerWidth > 460) {
      return TM400;
    } else {
      return TM300;
    }
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 600) {
        setSize(500);
        setTileMap(TM500);
      } else if (window.innerWidth > 460) {
        setSize(400);
        setTileMap(TM400);
      } else if (window.innerWidth <= 460) {
        setSize(300);
        setTileMap(TM300);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return { size, tileMap };
};

const TM500 = {
  "1": [0.4, 0.82],
  "2": [0.4, 0.76],
  "3": [0.4, 0.69],
  "4": [0.4, 0.62],
  "5": [0.4, 0.55],
  "6": [0.33, 0.49],
  "7": [0.27, 0.49],
  "8": [0.2, 0.49],
  "9": [0.135, 0.49],
  "10": [0.065, 0.49],
  "11": [0.003, 0.49],
  "12": [0.003, 0.42],
  "13": [0.003, 0.35],
  "14": [0.065, 0.35],
  "15": [0.135, 0.35],
  "16": [0.2, 0.35],
  "17": [0.27, 0.35],
  "18": [0.33, 0.35],
  "19": [0.4, 0.28],
  "20": [0.4, 0.22],
  "21": [0.4, 0.16],
  "22": [0.4, 0.085],
  "23": [0.4, 0.015],
  "24": [0.4, -0.05],
  "25": [0.465, -0.05],
  "26": [0.53, -0.05],
  "27": [0.53, 0.015],
  "28": [0.53, 0.085],
  "29": [0.53, 0.16],
  "30": [0.53, 0.22],
  "31": [0.53, 0.28],
  "32": [0.6, 0.35],
  "33": [0.665, 0.35],
  "34": [0.735, 0.35],
  "35": [0.8, 0.35],
  "36": [0.865, 0.35],
  "37": [0.935, 0.35],
  "38": [0.935, 0.42],
  "39": [0.935, 0.49],
  "40": [0.865, 0.49],
  "41": [0.8, 0.49],
  "42": [0.735, 0.49],
  "43": [0.665, 0.49],
  "44": [0.6, 0.49],
  "45": [0.53, 0.55],
  "46": [0.53, 0.62],
  "47": [0.53, 0.69],
  "48": [0.53, 0.76],
  "49": [0.53, 0.82],
  "50": [0.53, 0.885],
  "51": [0.465, 0.885],
  "52": [0.4, 0.885],
  R1: [0.465, 0.82],
  R2: [0.465, 0.76],
  R3: [0.465, 0.69],
  R4: [0.465, 0.62],
  R5: [0.465, 0.55],
  R6: [0.465, 0.49],
  G1: [0.065, 0.42],
  G2: [0.135, 0.42],
  G3: [0.2, 0.42],
  G4: [0.27, 0.42],
  G5: [0.33, 0.42],
  G6: [0.4, 0.42],
  Y1: [0.465, 0.015],
  Y2: [0.465, 0.085],
  Y3: [0.465, 0.16],
  Y4: [0.465, 0.22],
  Y5: [0.465, 0.28],
  Y6: [0.465, 0.35],
  B1: [0.865, 0.42],
  B2: [0.8, 0.42],
  B3: [0.735, 0.42],
  B4: [0.665, 0.42],
  B5: [0.6, 0.42],
  B6: [0.53, 0.42],
  R01: [0.1, 0.8],
  R02: [0.1, 0.66],
  R03: [0.24, 0.66],
  R04: [0.24, 0.8],
  G01: [0.1, 0.2],
  G02: [0.1, 0.06],
  G03: [0.24, 0.06],
  G04: [0.24, 0.2],
  Y01: [0.7, 0.2],
  Y02: [0.7, 0.06],
  Y03: [0.84, 0.06],
  Y04: [0.84, 0.2],
  B01: [0.7, 0.8],
  B02: [0.7, 0.66],
  B03: [0.84, 0.66],
  B04: [0.84, 0.8],
};

const TM400 = {
  "1": [0.395, 0.81],
  "2": [0.395, 0.74],
  "3": [0.395, 0.67],
  "4": [0.395, 0.61],
  "5": [0.395, 0.54],
  "6": [0.33, 0.48],
  "7": [0.26, 0.48],
  "8": [0.19, 0.48],
  "9": [0.125, 0.48],
  "10": [0.065, 0.48],
  "11": [0.003, 0.48],
  "12": [0.003, 0.41],
  "13": [0.003, 0.34],
  "14": [0.065, 0.34],
  "15": [0.125, 0.34],
  "16": [0.19, 0.34],
  "17": [0.26, 0.34],
  "18": [0.33, 0.34],
  "19": [0.395, 0.28],
  "20": [0.395, 0.21],
  "21": [0.395, 0.14],
  "22": [0.395, 0.08],
  "23": [0.395, 0.01],
  "24": [0.395, -0.065],
  "25": [0.46, -0.065],
  "26": [0.525, -0.065],
  "27": [0.525, 0.01],
  "28": [0.525, 0.08],
  "29": [0.525, 0.14],
  "30": [0.525, 0.21],
  "31": [0.525, 0.28],
  "32": [0.595, 0.34],
  "33": [0.66, 0.34],
  "34": [0.727, 0.34],
  "35": [0.79, 0.34],
  "36": [0.86, 0.34],
  "37": [0.93, 0.34],
  "38": [0.93, 0.41],
  "39": [0.93, 0.48],
  "40": [0.86, 0.48],
  "41": [0.79, 0.48],
  "42": [0.727, 0.48],
  "43": [0.66, 0.48],
  "44": [0.595, 0.48],
  "45": [0.525, 0.54],
  "46": [0.525, 0.61],
  "47": [0.525, 0.67],
  "48": [0.525, 0.74],
  "49": [0.525, 0.81],
  "50": [0.525, 0.875],
  "51": [0.46, 0.875],
  "52": [0.395, 0.875],
  R1: [0.46, 0.81],
  R2: [0.46, 0.74],
  R3: [0.46, 0.67],
  R4: [0.46, 0.61],
  R5: [0.46, 0.54],
  R6: [0.46, 0.48],
  G1: [0.065, 0.41],
  G2: [0.125, 0.41],
  G3: [0.19, 0.41],
  G4: [0.26, 0.41],
  G5: [0.33, 0.41],
  G6: [0.395, 0.41],
  Y1: [0.46, 0.01],
  Y2: [0.46, 0.08],
  Y3: [0.46, 0.14],
  Y4: [0.46, 0.21],
  Y5: [0.46, 0.28],
  Y6: [0.46, 0.34],
  B1: [0.86, 0.41],
  B2: [0.79, 0.41],
  B3: [0.727, 0.41],
  B4: [0.66, 0.41],
  B5: [0.595, 0.41],
  B6: [0.53, 0.41],
  R01: [0.09, 0.79],
  R02: [0.09, 0.65],
  R03: [0.23, 0.65],
  R04: [0.23, 0.79],
  G01: [0.09, 0.19],
  G02: [0.09, 0.05],
  G03: [0.23, 0.05],
  G04: [0.23, 0.19],
  Y01: [0.69, 0.19],
  Y02: [0.69, 0.05],
  Y03: [0.83, 0.05],
  Y04: [0.83, 0.19],
  B01: [0.69, 0.79],
  B02: [0.69, 0.65],
  B03: [0.83, 0.65],
  B04: [0.83, 0.79],
};

const TM300 = {
  "1": [0.45, 0.92],
  "2": [0.45, 0.84],
  "3": [0.45, 0.76],
  "4": [0.45, 0.68],
  "5": [0.45, 0.61],
  "6": [0.38, 0.53],
  "7": [0.3, 0.53],
  "8": [0.22, 0.53],
  "9": [0.14, 0.53],
  "10": [0.065, 0.53],
  "11": [0, 0.53],
  "12": [0, 0.45],
  "13": [0, 0.38],
  "14": [0.065, 0.38],
  "15": [0.14, 0.38],
  "16": [0.22, 0.38],
  "17": [0.3, 0.38],
  "18": [0.38, 0.38],
  "19": [0.45, 0.3],
  "20": [0.45, 0.22],
  "21": [0.45, 0.15],
  "22": [0.45, 0.07],
  "23": [0.45, -0.001],
  "24": [0.45, -0.09],
  "25": [0.53, -0.09],
  "26": [0.61, -0.09],
  "27": [0.61, 0.001],
  "28": [0.61, 0.07],
  "29": [0.61, 0.15],
  "30": [0.61, 0.22],
  "31": [0.61, 0.3],
  "32": [0.69, 0.38],
  "33": [0.76, 0.38],
  "34": [0.84, 0.38],
  "35": [0.92, 0.38],
  "36": [0.995, 0.38],
  "37": [1.07, 0.38],
  "38": [1.07, 0.45],
  "39": [1.07, 0.53],
  "40": [0.995, 0.53],
  "41": [0.92, 0.53],
  "42": [0.84, 0.53],
  "43": [0.76, 0.53],
  "44": [0.69, 0.53],
  "45": [0.61, 0.61],
  "46": [0.61, 0.68],
  "47": [0.61, 0.76],
  "48": [0.61, 0.84],
  "49": [0.61, 0.92],
  "50": [0.61, 0.995],
  "51": [0.53, 0.995],
  "52": [0.45, 0.995],
  R1: [0.53, 0.92],
  R2: [0.53, 0.84],
  R3: [0.53, 0.76],
  R4: [0.53, 0.69],
  R5: [0.53, 0.61],
  R6: [0.53, 0.53],
  G1: [0.065, 0.45],
  G2: [0.14, 0.45],
  G3: [0.22, 0.45],
  G4: [0.3, 0.45],
  G5: [0.38, 0.45],
  G6: [0.45, 0.45],
  Y1: [0.53, 0.001],
  Y2: [0.53, 0.07],
  Y3: [0.53, 0.15],
  Y4: [0.53, 0.22],
  Y5: [0.53, 0.3],
  Y6: [0.53, 0.38],
  B1: [0.995, 0.45],
  B2: [0.92, 0.45],
  B3: [0.84, 0.45],
  B4: [0.76, 0.45],
  B5: [0.69, 0.45],
  B6: [0.61, 0.45],
  R01: [0.1, 0.9],
  R02: [0.1, 0.74],
  R03: [0.26, 0.74],
  R04: [0.26, 0.9],
  G01: [0.1, 0.2],
  G02: [0.1, 0.06],
  G03: [0.26, 0.06],
  G04: [0.26, 0.2],
  Y01: [0.8, 0.2],
  Y02: [0.8, 0.06],
  Y03: [0.96, 0.06],
  Y04: [0.96, 0.2],
  B01: [0.8, 0.9],
  B02: [0.8, 0.74],
  B03: [0.96, 0.74],
  B04: [0.96, 0.9],
};
