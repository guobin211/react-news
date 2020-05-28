import React from 'react';
import { openModel } from '../shared/ModelService'

export interface FormPageProps {
}

export interface FormPageState {
}

export default class FormPage extends React.Component<FormPageProps, FormPageState>{

  public openModel(text: string) {
    openModel(text, (e: any) => {
      console.log(e);
    })
  }

  render() {
    return (
      <div className="FormPage">
        HELLO FormPage
        <button type="button" onClick={() => this.openModel('hello')}>open</button>
      </div>
    )
  }
}
