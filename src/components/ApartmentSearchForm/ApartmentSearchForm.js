import React, { Component } from 'react';

import { Row, Col, Button } from 'reactstrap';

import RoomsCountSelect from '../form/RoomsCountSelect';
import RangeInput from '../form/RangeInput';
import LoadSelect from '../form/LoanSelect';

export default class ApartmentSearchForm extends Component {

  render() {
    const { availableOptions, params, onParamsChange,
      loadApartments } = this.props;

    return <div>
      <Row>
        <Col>
          <RoomsCountSelect
            onChange={(values) => { onParamsChange({ rooms_count: values }) }}
            availableOptions={availableOptions.rooms_count}
            value={params.rooms_count}
          />
          <p>Hold ctrl to select multiple values</p>
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
      <Row style={{ marginTop: 50 }}>
        <Col>
          <LoadSelect
            value={params.credit || []}
            onChange={value => { onParamsChange({ credit: value }) }}
          />
        </Col>

        <Col>
          <Button
            onClick={loadApartments}
          >
            Show {availableOptions.totalAvailable} options
          </Button>
        </Col>
      </Row>
    </div>
  }
}