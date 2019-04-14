import React from "react";

export class NotFound extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>PAGE NOT FOUND!</h1>
      </div>
    );
  }
}
