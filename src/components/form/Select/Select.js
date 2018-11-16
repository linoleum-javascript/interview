import React, { Component } from 'react';

import { Input } from 'reactstrap';

export default class Select extends Component {
  onChange = (event) => {
    const { target } = event;
    const { onChange } = this.props;
    const values = [...target.options].filter((item) => {
      return item.selected;
    }).map(item => item.value);

    onChange(values);
  }

  render() {
    const { options, multiple, value } = this.props;
    return <Input
      type="select"
      onChange={this.onChange}
      multiple={multiple}
      value={value}
    >
      {options.map(({ name, value, disabled }) => {
        return <option
          value={value}
          key={value}
          disabled={disabled}
        >{name}</option>;
      })}
    </Input>
  }
}