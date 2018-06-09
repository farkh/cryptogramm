import React, { Component } from 'react';

import DropdownAccount from './DropdownAccount.jsx';

import LogoImg from '../img/logo.png';
import UpArrow from '../img/up_arrow.png';
import DownArrow from '../img/down_arrow.png';
import Avatar from '../img/avatar.png';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showDropdown: false
    };
  }

  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }
  
  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <img src={LogoImg} alt="Logo"/>
          <p className="header__logo-text">Cryptogramm</p>
        </div>

        <div className="header__account">
          <img src={Avatar} alt="Avatar" className="header__avatar"/>
          <p 
            className="header__account-name"
            onClick={() => this.toggleDropdown()}
          >
            konstantin_konstantinopolsky
          </p>
          <img 
            src={
              (this.state.showDropdown) ? UpArrow : DownArrow
            } 
            alt="Arrow" 
            className="header__dropdown-toggler"
            onClick={() => this.toggleDropdown()}
          />
        </div>

        {this.state.showDropdown && <DropdownAccount onLinkClick={this.toggleDropdown.bind(this)} />}
      </header>
    );
  }
}

export default Header;
