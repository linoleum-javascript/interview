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

  render() {
    const { title, availableMin, availableMax,
      onChange } = this.props;

    const { min, max } = this.state;

    return <div style={{ padding: 50 }}>
      <InputRange
        value={{ min: parseInt(min), max: parseInt(max) }}
        minValue={availableMin}
        maxValue={availableMax}
        onChange={value => this.setState({ min: value.min, max: value.max })}
        onChangeComplete={value => onChange(value)}
      />
    </div>
  }
}