import React, { Component } from 'react';

import ApartmentSearchForm from '../ApartmentSearchForm';
import ApartmentsList from '../ApartmentsList';

export default class ApartmentSearch extends Component {
  render() {
    const { availableOptions, params, onParamsChange,
      loadApartments, list = [] } = this.props;

    return <div>
      <ApartmentSearchForm
        availableOptions={availableOptions}
        params={params}
        onParamsChange={onParamsChange}
        loadApartments={loadApartments}
      />
      <ApartmentsList
        items={list}
      />
    </div>;
  }
}