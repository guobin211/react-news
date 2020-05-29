import React from 'react'

export interface ModelProps {
  text: string;
  close: (b: boolean) => void;
}

export default class Model extends React.Component<ModelProps> {
  render() {
    return (
      <div className="Model">
        HELLO {this.props.text}
        <button type="button" onClick={() => this.props.close(false)}>close</button>
      </div>
    )
  }
}
