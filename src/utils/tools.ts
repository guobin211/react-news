export function getMaxNum(arr: number[]) {
  return Math.max(...arr)
}

export function isDev() {
  return process.env.NODE_ENV !== "production"
}
