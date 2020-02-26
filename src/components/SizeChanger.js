import React, { Component } from 'react';

export default class SizeChanger extends Component {
  render() {
    return (
      <select className="dropDownContainer" onChange={(e) => this.props.update(e.target.value)} disabled={this.props.allowEdit === 'false'}>
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    );
  }
}
