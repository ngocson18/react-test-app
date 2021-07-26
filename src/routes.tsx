import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Demo from './routing/demo';

//@ts-ignore
import { NotificationContainer } from "react-notifications";
/**
 * Main App routes.
 */
let userLocal: any = localStorage.getItem("user");
let user = JSON.parse(userLocal);
  const routes = () => (
    <div>
      <Switch>
        <Route exact path="/" component={ Demo } />
      </Switch>
    </div>
  );


const routing = function createRouting() {
  try {
    return (
      <>
        <NotificationContainer />
        <Router>
          {/* <ErrorBoundary>{routes()}</ErrorBoundary> */}
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
