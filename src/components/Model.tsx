import React from 'react';

export interface ModelProps {
  text: string;
  close: (b: boolean) => void;
}

export interface ModelState {
}

export default class Model extends React.Component<ModelProps, ModelState>{
  render() {
    return (
      <div className="Model">
        HELLO {this.props.text}

        <button type="button" onClick={() => this.props.close(false)}>close</button>
      </div>
    )
  }
}
