import React from 'react';
import ReactDOM from 'react-dom';
import Model from '../components/Model';

let zIndex = 100;

export function openModel(text: string, callback: Function) {
  const div = document.createElement('div') as HTMLElement;
  div.style.zIndex = (zIndex++).toString();
  ReactDOM.render(<Model text={text} close={e => {
    div.remove();
    callback(e);
  }}/>, div)
  document.body.appendChild(div);
}
