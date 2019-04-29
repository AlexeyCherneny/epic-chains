import React, { PureComponent } from "react";

import styles from "./index.module.scss";

class Page extends PureComponent {
  render() {
    return <div className={styles.Page}>{this.props.children}</div>;
  }
}

export default Page;
