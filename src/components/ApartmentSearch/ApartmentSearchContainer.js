import React, { Component } from 'react';
import { connect } from 'react-redux';
import qs from 'qs';
import { isEqual } from 'lodash';

import { loadApartments, loadAvailableOptions } from '../../actions/apartments';

import ApartmentSearch from './ApartmentSearch';


class ApartmentSearchContainer extends Component {
  state = {
    availableOptions: {
      credit: ['mortgage', 'by_installments'],
      rooms_count: [0, 1, 2, 3, 4, 5, 6],
      price_per_m_min: 0,
      price_per_m_max: 999999999
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let newState = { ...prevState };
    // this pattern https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
    if (!isEqual(nextProps.params, prevState.prevParams)) {
      newState.prevAvailableOptions = newState.availableOptions;
      newState.availableOptions = null;
      newState.prevParams = nextProps.params;
      
      return newState;
    }
    return {
      availableOptions: nextProps.availableOptions,
      list: nextProps.list,
      params: nextProps.params
    };
  }

  onParamsChange = (newParams) => {
    const { params, history } = this.props;
    
    history.push(`/?${qs.stringify({ ...params, ...newParams })}`);
  }

  componentDidMount() {
    this.loadOptions();
    this.loadList();
  }

  componentDidUpdate() {
    if (this.state.availableOptions === null) {
      this.loadOptions();
    }
  }

  loadOptions = () => {
    const { params, loadAvailableOptions } = this.props;
    loadAvailableOptions(params);
  }

  loadList = () => {
    const { params, loadApartments } = this.props;
    loadApartments(params);
  }

  render() {
    const { availableOptions, prevAvailableOptions, list } = this.state;
    const { loadApartments, params } = this.props;

    console.log(params);

    return <ApartmentSearch
      onParamsChange={this.onParamsChange}
      availableOptions={availableOptions || prevAvailableOptions}
      list={list}
      params={params}
      loadApartments={loadApartments}
    />
  }
}

ApartmentSearchContainer.defaultProps = {
  availableOptions: {}
};

export default connect((state, props) => {
  const params = qs.parse(props.location.search,
    { ignoreQueryPrefix: true }
  ) || {};

  return {
    params,
    list: state.apartments.list,
    availableOptions: state.apartments.availableOptions
  };
}, {
  loadApartments, loadAvailableOptions
})(ApartmentSearchContainer);