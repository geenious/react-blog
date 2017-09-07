import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout.js';
import CreatePost from './components/CreatePost.js';
import PostList from './components/PostList.js';
import ShowPost from './components/ShowPost.js';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route path='/create' component={CreatePost} />
        <Route path='/show/:id' component={ShowPost} />
        <Route path='/show' component={PostList} />
        <Route path='/' component={BaseLayout} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
