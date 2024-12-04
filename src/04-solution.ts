import { readInput, withTiming, parseWordSearch } from "./lib.ts";
export const part1 = async () =>
  withTiming(async () => {
    const data = await readInput("04");
    const ws = parseWordSearch(data);

    const searchDirs = [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
      [-1, -1],
      [1, 1],
      [1, -1],
      [-1, 1],
    ];

    let count = 0;
    for (let y = 0; y < ws.length; ++y) {
      for (let x = 0; x < ws[0].length; ++x) {
        count += searchDirs.reduce((acc, [dx, dy]) => {
          let possible = Array.from(
            { length: 4 },
            (_, i) => ws[y + dy * i]?.[x + dx * i],
          );
          if (possible.join("") === "XMAS") {
            acc++;
          }
          return acc;
        }, 0);
      }
    }

    return count;
  });

export const part2 = async () =>
  withTiming(async () => {
    const data = await readInput("04");
    const ws = parseWordSearch(data);

    const searchDirs = [
      [-1, -1],
      [1, -1],
      [0, 0],
      [-1, 1],
      [1, 1],
    ];

    let count = 0;
    let valid = new Set(["MSAMS", "MMASS", "SMASM", "SSAMM"]);
    for (let y = 1; y < ws.length - 1; ++y) {
      for (let x = 1; x < ws[0].length - 1; ++x) {
        let xmas = Array.from(
          searchDirs,
          ([dx, dy]) => ws[y + dy][x + dx],
        ).join("");
        count += valid.has(xmas) ? 1 : 0;
      }
    }
    return count;
  });
