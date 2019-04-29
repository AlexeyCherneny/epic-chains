import React, { PureComponent } from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import { Page1, Page2, Page3, Page4 } from "./pages";
import { Page } from "./pages/components";

import styles from "./app.module.scss";

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Page>
          <div className={styles.NavigationBar}>
            <NavLink
              activeClassName={styles.NavigationLinkActive}
              className={styles.NavigationLink}
              to="/page1"
            >
              Page 1
            </NavLink>
            <NavLink
              activeClassName={styles.NavigationLinkActive}
              className={styles.NavigationLink}
              to="/page2"
            >
              Page 2
            </NavLink>
            <NavLink
              activeClassName={styles.NavigationLinkActive}
              className={styles.NavigationLink}
              to="/page3"
            >
              Page 3
            </NavLink>
            <NavLink
              activeClassName={styles.NavigationLinkActive}
              className={styles.NavigationLink}
              to="/page4"
            >
              Page 4
            </NavLink>
          </div>
          <Switch>
            <Route exact path="/page1" component={Page1} />
            <Route exact path="/page2" component={Page2} />
            <Route exact path="/page3" component={Page3} />
            <Route exact path="/page4" component={Page4} />
          </Switch>
        </Page>
      </div>
    );
  }
}

export default App;
