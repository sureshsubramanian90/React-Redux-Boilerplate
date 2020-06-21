import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';
import classNames from 'classnames/bind';
import { exampleAction } from '../../../actions/ExampleAction';
import * as styles from  './Home.css';

const cx = classNames.bind(styles);

class Home extends Component {
  constructor() {
    super();
  }

  static propTypes = {
    data: PropTypes.objectOf(PropTypes.object),
    };

    static defaultProps = {
      data: {},
    };

  componentDidMount() {
    this.props.actions.exampleAction();
  }

  render() {
    return (
      <div className={cx("mainContainer", "col8")}>
        REACT REDUX BOILERPLATE
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const data = get(state, 'data');
  return {
    data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      exampleAction,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
