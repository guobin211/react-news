import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import { AppRouter } from "./AppRouter";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

