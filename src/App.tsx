import React from 'react';

// Redux
import { Provider } from 'react-redux';
import configureStore, { history } from './configureStore'; 

// Router
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

// Components
import Home from './components/Home';
import ClassComponent from './components/Class/index';
import FunctionalComponent from './components/Functional/Functional'

const store = configureStore()  

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
            <Route path="/functional-component">
              <FunctionalComponent />
            </Route>
            <Route path="/class-component">
              <ClassComponent />
            </Route>
            <Route component={Home} />
          </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
