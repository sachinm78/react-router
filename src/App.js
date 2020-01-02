import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function App() {    
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            
            {/* Newest way using children */}
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/contact"><Contact /></Route>
            </Switch>
        </div>
    )
}

export default App

// Old way with render
/* <Switch>
    <Route exact path="/" render={() => <Home />} />
    <Route path="/about" render={() => <About />} />
</Switch> */

// 2nd option with component
/* <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
</Switch> */



