import React, { Component } from 'react';

import RoomsCountSelect from '../form/RoomsCountSelect';

export default class ApartmentSearchForm extends Component {

  render() {
    const { availableOptions, params, onParamsChange } = this.props;

    return <div>
      <RoomsCountSelect
        onChange={(values) => { onParamsChange({ rooms_count: values }) }}
        availableOptions={availableOptions.rooms_count}
        value={params.rooms_count}
      />
    </div>
  }
}