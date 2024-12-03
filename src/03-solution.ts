import { withTiming, readInput } from "./lib.ts";

export const part1 = async () =>
  withTiming(async () => {
    const data = await readInput("03");
    const singleLine = data.replace(/\n/g, "");

    const regex = /mul\(\d{1,3},\d{1,3}\)/g;
    const matches = singleLine.match(regex) || [];

    const sumOfProducts = matches.reduce((sum, match) => {
      const [x, y] = match.slice(4, -1).split(",");
      const product = parseInt(x, 10) * parseInt(y, 10);
      return sum + product;
    }, 0);

    return sumOfProducts;
  });

export const part2 = async () =>
  withTiming(async () => {
    const data = await readInput("03");
    const singleLine = data.replace(/\n/g, "");

    const regex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;
    const matches = singleLine.match(regex) || [];

    let sumOfProducts = 0;
    let enabled = true;
    for (const match of matches) {
      if (match == "do()") {
        enabled = true;
      } else if (match == "don't()") {
        enabled = false;
      } else {
        const [x, y] = match.slice(4, -1).split(",");
        sumOfProducts += enabled ? parseInt(x, 10) * parseInt(y, 10) : 0;
      }
    }

    return sumOfProducts;
  });
