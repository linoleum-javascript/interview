import React, { Component } from 'react';

export default class ApartmentsList extends Component {
  render() {
    const { items } = this.props;
    return <div style={{ padding: 50 }}>
      <h3>Apartments list</h3>
      <ul>
        {items.map(item => {
          return <li key={item.name}>{item.name}</li>
        })}
      </ul>
    </div>
  }
}