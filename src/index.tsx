import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Admin } from "./Admin";
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Admin />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

