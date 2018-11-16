import React, { Component } from 'react';
import InputRange from 'react-input-range';

import { isEqual } from 'lodash';

export default class RangeInput extends Component {
  state = {
    value: 0
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.max !== prevState.prevMax ||
        nextProps.min !== prevState.prevMin) {
      return {
        min: nextProps.min,
        max: nextProps.max,
        prevMax: nextProps.max,
        prevMin: nextProps.min
      }
    }
    return null;
  }

  onChange = (value) => {
    let { min, max } = value;
    const { availableMin, availableMax, onChange } = this.props;
    if (min < availableMin) {
      min = availableMin;
    }
    if (max > availableMax) {
      max = availableMax;
    }
    onChange({ min, max });
  }

  render() {
    const { title, availableMin, availableMax,
      onChange } = this.props;

    const { min, max } = this.state;

    return <div style={{ padding: 50 }}>
      <InputRange
        value={{
          min: parseInt(min || availableMin),
          max: parseInt(max || availableMax)
        }}
        minValue={availableMin}
        maxValue={availableMax}
        onChange={this.onChange}
        onChangeComplete={value => onChange(value)}
      />
    </div>
  }
}