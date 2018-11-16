import React, { Component } from 'react';

import Select from '../Select';

const defaultOptions = [{
  value: 0,
  name: 'Studio'
}, {
  value: 1,
  name: '1 room'
}, {
  value: 2,
  name: '2 rooms'
}, {
  value: 3,
  name: '3 rooms'
}, {
  value: 4,
  name: '4 rooms'
}, {
  value: 5,
  name: '5 rooms'
}, {
  value: 6,
  name: '6 rooms'
}];

export default class RoomsCountSelect extends Component {
  render() {
    const { onChange, availableOptions, value } = this.props;
    const actualOptions = defaultOptions.map((item) => {
      return {
        ...item,
        // if an option is not available, it will be disabled
        // (like in the yandex.market's interface)
        disabled: availableOptions.indexOf(item.value) === -1
      };
    });

    return <Select
      options={actualOptions}
      onChange={onChange}
      value={value}
      multiple={true}
    />;
  }
}