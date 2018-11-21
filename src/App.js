import React, { Component } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import BillForm from './components/BillForm'
import Bills from './components/Bills'
import Statistics from './components/Statistics'

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
              <Route exact path="/" component={Home} />
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
