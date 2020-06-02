export class Stack<T> {
  private list: T[]
  private size = 0

  constructor() {
    this.list = []
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getTop(): T | undefined {
    if (this.isEmpty()) {
      return
    }
    return this.list[this.size]
  }

  push(e: T) {
    this.list.push(e)
    this.size++
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return
    }
    const top = this.list[this.size]
    this.list.splice(this.size, 1)
    this.size--
    return top
  }

  clear() {
    this.list = []
    this.size = 0
  }
}
