import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import About from './components/About';
import User from './components/User';
import WrapperState from './containers/WrapperState';
import './index.css';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <BrowserRouter>
      <WrapperState>
          <Route path='/' component={App} />
          <Route path='/About' component={About} />
          <Route path='/User' component={User} />
      </WrapperState>
    </BrowserRouter>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
