import React, { Component } from 'react';
import { connect } from 'react-redux';

import ApartmentSearch from './ApartmentSearch';

class ApartmentSearchContainer extends Component {
  state = {

  };

  static getDerivedStateFromProps(props, state) {
    return null;
  }

  onParamsChange = () => {

  }

  render() {
    console.log(this.props);
    return <ApartmentSearch

    />
  }
}

export default connect((state) => {
  return {

  };
}, {

})(ApartmentSearchContainer);