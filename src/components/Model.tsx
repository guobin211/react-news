import React from 'react'
import styles from './styles/Model.module.less'

export interface ModelProps {
  text: string
  close: (b: boolean) => void
}

export default class Model extends React.Component<ModelProps> {
  render() {
    return (
      <div className={styles.Model}>
        HELLO {this.props.text}
        <button type="button" onClick={() => this.props.close(false)}>
          close
        </button>
      </div>
    )
  }
}
