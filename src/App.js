import React, { Component } from 'react'
import './App.css'

import Navbar from './components/Navbar/index.js'
import HomePage from './components/HomePage/index.js'
import BillForm from './containers/BillForm'
import Bills from './components/Bills/index.js'
import Statistics from './components/Statistics/index.js'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <React.Fragment>
              <Navbar />
              <Route exact path="/" component={HomePage} />
              <Route path="/enter-bill" component={BillForm} />
              <Route path="/bills" component={Bills} />
              <Route path="/stats" component={Statistics} />
            </React.Fragment>
          </Router>


        </div >
      </Provider>
    )
  }
}

export default App
