import React from 'react'
import './styles/Model.less'
import { Button } from 'antd'

export interface ModelProps {
  // 标题
  title?: string | HTMLElement
  // 内容 string | Component
  body?: any
  // 底部 string | Component
  foot?: any
  // 确定
  confirm: () => void
  // 取消
  cancel: () => void
  // 显示footer
  showFooter?: boolean
}

export default class Model extends React.Component<ModelProps> {
  render() {
    return (
      <div className="model center">
        <div className="middle">
          <button type="button" aria-label="Close" className="ant-modal-close">
            <span className="ant-modal-close-x" onClick={this.props.cancel}>
              <span
                role="img"
                aria-label="close"
                className="anticon anticon-close ant-modal-close-icon"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  className=""
                  data-icon="close"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
                </svg>
              </span>
            </span>
          </button>
          <div className="model-title">{this.props.title}</div>
          <div className="model-body">{this.props.body}</div>
          {this.props.showFooter === false ? null : (
            <div className="model-foot">
              <Button type="primary" onClick={this.props.cancel}>
                取消
              </Button>
              <Button type="primary" onClick={this.props.confirm}>
                确定
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
