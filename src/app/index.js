import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';
import Child from '~/child';

const app = <div className={style.greetings}><Child /></div>;

if (typeof ISOMORPHIC_WEBPACK === 'undefined') {
  ReactDOM.render(app, document.getElementById('app'));
}

export default app;
