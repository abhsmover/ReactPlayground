import React, {useContext} from "react"
import {Context} from "./context/Context"
import {Switch, Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header"

const App = () => {
    const {test} = useContext(Context)
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </>
    );
}

export default App