import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

import RoomsCountSelect from '../form/RoomsCountSelect';
import RangeInput from '../form/RangeInput';

export default class ApartmentSearchForm extends Component {

  render() {
    const { availableOptions, params, onParamsChange } = this.props;

    return <div>
      <Row>
        <Col>
          <RoomsCountSelect
            onChange={(values) => { onParamsChange({ rooms_count: values }) }}
            availableOptions={availableOptions.rooms_count}
            value={params.rooms_count}
          />
        </Col>

        <Col>
          <RangeInput
            min={params.price_per_m_min}
            max={params.price_per_m_max}
            availableMin={availableOptions.price_per_m_min}
            availableMax={availableOptions.price_per_m_max}
            onChange={(value) => { onParamsChange({
              price_per_m_max: value.max,
              price_per_m_min: value.min
            })}}
          />
        </Col>
      </Row>
    </div>
  }
}