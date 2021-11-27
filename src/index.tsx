import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { StoresContextProvider } from './context';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './styles/app.scss';

ReactDOM.render(
  <React.StrictMode>
    <StoresContextProvider>
      <App />
    </StoresContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
