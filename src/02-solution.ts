import { withTiming, parseLists, readInput } from "./lib";

export const part1 = async () => withTiming(async () => {
  const data = await readInput("02")
  const reports = parseLists(data);

  const isSafe = (report: number[]) => {
    let incr = report[1] > report[0]
    let prev = report[0]
    for (let i = 1; i < report.length; i++) {
      let diff = report[i] - prev
      if (Math.abs(diff) < 1 ||
          Math.abs(diff) > 3 ||
          (incr ? diff <= 0 : diff >= 0)) {
          return false
      }
      prev = report[i]
    }
    return true
  }

  return reports.filter(isSafe).length
})

