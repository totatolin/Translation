import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import A from '../components/aaa.jsx';
import B from '../components/bbb.jsx';
class Routers extends React.Component {
  constructor() {
    super();
  }
  render () {
    return (
      <Router>
        <div>
          <div>
            <div>
              <Link to="/aaa">aaa</Link>
            </div>
            <div>
              <Link to="/bbb">bbb</Link>
            </div>
          </div>

          <div>
            <Route path="/aaa" component={A} />
            <Route path="/bbb" component={B} />
          </div>
        </div>
      </Router>
    )
  }
}
export default Routers;