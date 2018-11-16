import React, { Component } from 'react';

import ApartmentSearchForm from '../ApartmentSearchForm';

export default class ApartmentSearch extends Component {
  render() {
    const { availableOptions, params, onParamsChange } = this.props;
    return <div>
      <ApartmentSearchForm
        availableOptions={availableOptions}
        params={params}
        onParamsChange={onParamsChange}
      />
    </div>;
  }
}