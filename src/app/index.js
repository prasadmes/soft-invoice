import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Header = () => <div />
const Login = () => <div />

const App = () => (
  <BrowserRouter>
    <main>
      <Header />
      <Switch>
        <Route path='/login' component={Login} />
        <Route exact path='/' component={Login} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </main>
  </BrowserRouter>
)

export default App
