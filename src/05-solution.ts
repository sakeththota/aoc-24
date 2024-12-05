import { withTiming, readInput } from "./lib.ts";

export const part1 = async () =>
  withTiming(async () => {
    const data = await readInput("05");
    const [sectionOne, sectionTwo] = data.split("\n\n");
    const rawOrdering = sectionOne
      .trim()
      .split("\n")
      .map((line) => {
        const [x, y] = line.split("|");
        return [parseInt(x, 10), parseInt(y, 10)];
      });
    const updates = sectionTwo
      .trim()
      .split("\n")
      .map((line) => line.split(",").map((x) => parseInt(x, 10)));

    const rules = new Map<number, Set<number>>();
    for (const rule of rawOrdering) {
      if (!rules.has(rule[0])) {
        rules.set(rule[0], new Set());
      }
      rules.get(rule[0]).add(rule[1]);
    }

    const validOrder = (update: number[]) => {
      for (let i = 0; i < update.length - 1; ++i) {
        if (!rules.get(update[i]) || !rules.get(update[i]).has(update[i + 1])) {
          return false;
        }
      }
      return true;
    };

    const total = updates
      .filter(validOrder)
      .reduce((acc, update) => acc + update[Math.floor(update.length / 2)], 0);

    return total;
  });
