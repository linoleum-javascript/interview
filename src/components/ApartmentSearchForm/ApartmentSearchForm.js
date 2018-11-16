import React, { Component } from 'react';

import RoomsCountSelect from '../form/RoomsCountSelect';

export default class ApartmentSearchForm extends Component {

  render() {
    const { availableOptions } = this.props;
    console.log(availableOptions);

    return <div>
      <RoomsCountSelect
        onChange={(value) => { console.log(value) }}
        availableOptions={availableOptions.rooms_count}
      />
    </div>
  }
}