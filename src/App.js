import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import styles from "./styles.css"

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function App() {    
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            
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



