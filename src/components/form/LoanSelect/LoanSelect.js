import React, { Component } from 'react';

import { Input, Label, FormGroup } from 'reactstrap';

export default class LoanSelect extends Component {
  onChange = (event) => {
    let { onChange, value } = this.props;
    if (!Array.isArray(value)) {
      value = [value];
    }
    const { checked, name } = event.target;
    let newValue;

    console.log(checked, value, name);

    if (checked) {
      newValue = [...value, name];
    } else {
      newValue = value.filter(item => item !== name);
    }
    onChange(newValue);
  }

  render() {
    let { value } = this.props;
    if (!Array.isArray(value)) {
      value = [value];
    }

    return <div>
      <FormGroup check>
        <Label check>
          <Input
            name="mortgage"
            type="checkbox"
            checked={value.indexOf('mortgage') !== -1}
            onChange={this.onChange}
          />
          {' '}
          mortgage
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            name="by_installments"
            type="checkbox"
            checked={value.indexOf('by_installments') !== -1}
            onChange={this.onChange}
          />
          {' '}
          by installments
        </Label>
      </FormGroup>
    </div>
  }
}