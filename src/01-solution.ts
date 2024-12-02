import { withTiming, parseAdjLists, readInput } from "./lib";

export const part1 = async () => withTiming(async () => {
  const data = await readInput("01");
  const [left, right] = parseAdjLists(data);

  let distance = 0;
  for (let i = 0; i < left.length; ++i) {
    distance = Math.abs(left[i] - right[i]);
  }

  return distance;
});

export const part2 = async () => withTiming(async () => {
  const data = await readInput("01");
  const [left, right] = parseAdjLists(data)

  const freqs = new Map<number, number>()
  for (const num of right) {
    freqs.set(num, (freqs.get(num) || 0) + 1)
  }

  let similarity = left.reduce((acc, num) => acc + num * (freqs.get(num) || 0))

  return similarity
})
