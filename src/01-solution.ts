import { withTiming, parsePairedLists, readInput } from "./lib";

export const part1 = async () =>
  withTiming(async () => {
    const data = await readInput("01");
    const [left, right] = parsePairedLists(data);

    left.sort();
    right.sort();

    let distance = 0;
    for (let i = 0; i < left.length; ++i) {
      distance = Math.abs(left[i] - right[i]);
    }

    return distance;
  });
