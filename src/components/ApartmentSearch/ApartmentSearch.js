import React, { Component } from 'react';

import ApartmentSearchForm from '../ApartmentSearchForm';

export default class ApartmentSearch extends Component {
  render() {
    const { availableOptions } = this.props;
    return <div>
      <ApartmentSearchForm
        availableOptions={availableOptions}
      />
    </div>;
  }
}