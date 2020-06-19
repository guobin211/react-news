import { BookVm } from "@/store/types/book.vm"
import { BooksAction } from "@/store/actions/books.action"

/**
 *  books-reducer.ts
 * @Date 2020-06-12
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project react-news
 */
const books: BookVm[] = [
  { id: "1", name: "物种起源", year: "2020" },
  { id: "2", name: "万有引力", year: "2020" }
]

const booksState = (state = books, action: { type: BooksAction; data?: BookVm[] }) => {
  switch (action.type) {
    case BooksAction.Update:
      state = action.data || []
      return state
    case BooksAction.Reset:
      state = books
      return state
    default:
      return state
  }
}

export default booksState
