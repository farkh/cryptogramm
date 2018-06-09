import React, { Component } from 'react';

class Operation extends Component {
  handleOptionSelect(e) {
    let element;
    if (!e.target.hasAttribute('data-option-key')) {
      element = e.target.parentElement;
    } else {
      element = e.target;
    }

    let key = element.getAttribute('data-option-key');
    this.props.handleOptionSelect(key);
  }
  
  render() {
    return (
      <div data-option-key={this.props.dataKey} className="operations__operation" onClick={e => this.handleOptionSelect(e)}>
        <img className="operations__icon" src={this.props.imageUri} alt={this.props.imageAlt} />
        <img src={this.props.activeImageUri} alt={this.props.imageAlt} className="operations__icon-active"/>
        <p className="operations__name">{this.props.operationName}</p>
      </div>
    );
  }
}

export default Operation;
