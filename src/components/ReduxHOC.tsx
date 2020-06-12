/**
 *  ReduxHOC.tsx
 * @Date 2020-06-12
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project react-news
 */
import withAjax from '@/utils/with-ajax'
import React from 'react'
import { BookVm } from '@/store/types/book.vm'
import store from '@/store'
import { BooksAction } from '@/store/actions/books.action'

const style = {
  book: {
    color: 'darkblue',
    fontSize: 16
  },
  list: {
    background: '#ccc'
  }
}
// 测试dispatch更新数据
// const inter = setInterval(() => {
//   const arr = JSON.parse(JSON.stringify(store.getState().booksState))
//   arr.push({ id: arr.length + 1, name: 'xxx', year: 2222 })
//   store.dispatch({ type: BooksAction.Update, data: arr })
// }, 2000)

function bookItem(book: BookVm, i: number) {
  return (
    <li style={style.book} key={i}>
      <span>书名: {book.name}</span>
      <span>年份: {book.year}</span>
    </li>
  )
}

function select(): BookVm[] {
  return store.getState().booksState
}

const BookListView: React.FC<any> = (props: { data: BookVm[] }) => {
  return <ul style={style.list}>{props.data.map((el, index) => bookItem(el, index))}</ul>
}

BookListView.displayName = 'BookListView'

const ReduxHOC = withAjax(BookListView, select)

export default ReduxHOC
