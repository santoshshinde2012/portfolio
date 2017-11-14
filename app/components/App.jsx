import React, { createClass } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Nav from 'app/components/Nav';
import Footer from 'app/components/Footer';

import Home from 'app/components/Home';
import User from 'app/components/User';
import About from 'app/components/About';

const App = createClass({
    displayName: 'App',

    render() {
        const Component = typeof window === 'undefined' ? 'div' : BrowserRouter;

        return (
            <Component>
                <div>
                    <Nav />
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/user" component={User}/>
                    <Route path="/about" component={About}/>
                    <Footer />
                </div>
            </Component>
        );
    }
});

export default App;
