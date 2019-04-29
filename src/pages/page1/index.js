import React, { PureComponent } from "react";
import { connect } from "react-redux";

import profileActions from "../../store/actions/profile";

import styles from "../index.module.scss";

class Page1 extends PureComponent {
  componentDidMount() {
    this.props.fetchCards();
  }

  render() {
    return <div className={styles.PageContent}>Page 1</div>;
  }
}

const mapDispatch = dispatch => ({
  fetchCards: () => dispatch(profileActions.fetchCardsStart())
});

export default connect(
  null,
  mapDispatch
)(Page1);
