import React, { Component } from 'react';

import { Input } from 'reactstrap';

export default class Select extends Component {
  render() {
    const { options, onChange } = this.props;
    return <Input type="select" onChange={onChange}>
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