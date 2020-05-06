import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import HelloWorld from './HelloWorld'
import Home from './portfolio/Home'
import HomepageLayout from './HomepageLayout'
import configureStore from '../packs/configureStore'

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => ("Home!")} />
            <Route path="/hello" render={() => <HelloWorld greeting="Friend" />} />
            <Route path="/portfolio" render={() => <Home />} />
            <Route path="/homepage" render={() => <HomepageLayout />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
