import { performance } from "perf_hooks";

export async function readInput(day: string): Promise<string> {
  return await Bun.file(`./src/${day}-input`).text();
}

export function parseAdjLists(input: string): [number[], number[]] {
  const left: number[] = [];
  const right: number[] = [];

  for (const line of input.trim().split("\n")) {
    const [leftStr, rightStr] = line.split(/\s+/);
    if (leftStr && rightStr) {
      left.push(parseInt(leftStr));
      right.push(parseInt(rightStr));
    }
  }

  return [left, right];
}

export function withTiming<T>(fn: () => Promise<T>): Promise<T> {
  return (async () => {
    const start = performance.now();
    const result = await fn();
    const duration = performance.now() - start;
    console.log(result, `(${duration.toFixed(2)}ms)`);
    return result;
  })();
}
