import React, { Component } from 'react';

class DropdownAccount extends Component {
  getInititalState() {
    return {
      showDropdown: true
    }
  }
  handleLinkClick() {
    this.props.onLinkClick();
  }
  
  render() {
    return (
      <div className="dropdown">
        <div className="dropdown__content">
          <a onClick={() => this.handleLinkClick()} href="#" className="dropdown__link">Мобильное приложение</a>
          <a onClick={() => this.handleLinkClick()} href="#" className="dropdown__link">Выход</a>
        </div>
      </div>
    )
  }
}

export default DropdownAccount;
