export class Stack<T> {
  private list: T[]
  constructor() {
    this.list = []
  }

  isEmpty() {
    return this.list.length === 0
  }

  getTop(): T | undefined {
    if (this.isEmpty()) {
      return
    }
    return this.list[this.list.length - 1]
  }

  push(e: T) {
    this.list.push(e)
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return
    }
    return this.list.pop()
  }

  clear() {
    this.list = []
  }
}
