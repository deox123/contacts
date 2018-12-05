import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../../routes/HomeRoute/index';
import Detail from '../../routes/DetailRoute/index';

const App = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/:id" render={props => <Detail {...props} />} />
            <Route path="/new" componenet={Detail} />
        </div>
    </Router>
);

export default App;