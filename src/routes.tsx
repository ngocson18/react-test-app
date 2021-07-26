import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Demo from './routing/demo';

//@ts-ignore
import { NotificationContainer } from "react-notifications";
/**
 * Main App routes.
 */
const routes = () => (
  <div>
    <Switch>
      <Route exact path="/demo" component = { Demo } />
      {/* <Route path="/demo">
            <Demo />
      </Route> */}
    </Switch>
  </div>
);


const routing = function createRouting() {
  try {
    return (
      <>
        <NotificationContainer />
        <Router>
          {routes()}
        </Router>
      </>
    );
  } catch(err) {
    console.log(err)
  }
};
/**
 * Wrap the app routes into router
 *
 * PROPS
 * =============================================================================
 * @returns {React.Node}
 */
export default routing;
