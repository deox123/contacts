import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../../routes/HomeRoute/index';
import Detail from '../../components/Detail';

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
            <Route path="/:id" render={props => <Detail {...props} extra={{asd:123 }} />} />
        </div>
    </Router>
);

export default App;