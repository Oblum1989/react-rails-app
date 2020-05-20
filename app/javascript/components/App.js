import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import HelloWorld from './HelloWorld'
import Home from './portfolio/Home'
import HomepageLayout from './HomepageLayout'
import HomeStore from './stores/Home'
import AllStores from './stores/Stores'
import HelJet from './HelJet'
import configureStore from '../packs/configureStore'

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => ("Home!")} />
            <Route path="/portfolio" render={() => <Home />} />
            <Route path="/homepage" render={() => <HomepageLayout />} />
            <Route path="/homeStores" component={HomeStore} />
            <Route path="/allStores" component={AllStores} />
            <Route path="/heljet" component={HelJet} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
