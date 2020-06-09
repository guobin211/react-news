import React from 'react'

interface IDataSource {
  _listener: VoidFn[]
  _comments: string[]
  _blogs: string[]
  [key: string]: any
}

type VoidFn = () => void

type SelectFn<T> = (dataSource: IDataSource) => T[]

type ReactComponent = typeof React.Component
/**
 * 数据源
 */
const DataSource: IDataSource = {
  _blogs: ['blogs1', 'blogs2'],
  _comments: ['comments1', 'comments2'],
  _listener: [],
  addChangeListener: function (fn: VoidFn) {
    this._listener.push(fn)
  },
  removeChangeListener: function (fn: VoidFn) {
    this._listener.splice(this._listener.indexOf(fn), 1)
  },
  getComments: function () {
    return this._comments
  },
  getBlogs: function () {
    return this._blogs
  }
}
function getDisplayName(WrappedComponent: any) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

/**
 * 高阶函数
 * @param WrapComponent 组件
 * @param selectData 对props的处理方法
 */
function withSubscription<T>(WrapComponent: ReactComponent, selectData: SelectFn<T>) {
  class WithSubscription extends React.Component<any, any> {
    static displayName: string
    constructor(props: any) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.state = {
        data: selectData(DataSource)
      }
    }
    componentDidMount() {
      DataSource.addChangeListener(this.handleChange)
    }
    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange)
    }
    handleChange() {
      this.setState({
        data: selectData(DataSource)
      })
    }

    render() {
      return <WrapComponent data={this.state.data} {...this.props} />
    }
  }
  // 包装显示名称以便轻松调试
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrapComponent)})`
  return WithSubscription
}

/**
 * view视图组件
 */
class CommentList extends React.Component<any, any> {
  render() {
    return this.props.data
      ? this.props.data.map((s: string, index: number) => {
          return (
            <p style={{ color: 'red' }} key={index}>
              {s}
            </p>
          )
        })
      : null
  }
}

class BlogList extends React.Component<any, any> {
  render() {
    return this.props.data
      ? this.props.data.map((s: any, index: number) => {
          return (
            <p style={{ color: 'darkblue' }} key={index}>
              {s}
            </p>
          )
        })
      : null
  }
}

/**
 * 业务组件
 * 视图 + 数据
 */
const CommentListWithSubscription = withSubscription(CommentList, (DataSource) => DataSource.getComments())

const BlogListWithSubscription = withSubscription(BlogList, (DataSource) => DataSource.getBlogs())

export default function HOC() {
  return (
    <div>
      <p>高阶组件</p>
      <CommentListWithSubscription />
      <BlogListWithSubscription />
    </div>
  )
}
