import React,  { Component } from 'react';

import CheckboxBgImg from '../img/checkbox_bg.png';
import CheckboxCircleImg from '../img/checkbox_circle.png';

class SignaturesType extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }
  
  handleCheckboxToggle(e) {
    this.setState({ checked: !this.state.checked });
  }
  
  render() {
    return (
      <div className="content__part">
        <div className="content__point">
          <span className="content__point-text">3</span>
        </div>
        <h2 className="content__header">
          Выберите вид подписи
        </h2>

        <div className="operations__sign">
          <div className="operations__sign-type">
            <h3 className="operations__sign-type-header">Присоединенная</h3>
            <p className="operations__sign-type-description">Подпись будет доступна<br />в этом же файле</p>
          </div>
          
          <div className="checkbox">
            <img className="checkbox__bg" src={CheckboxBgImg} alt="checkbox"/>
            <img  className={'checkbox__circle' + ' ' + ((this.state.checked) && 'active')} src={CheckboxCircleImg} onClick={(e) => this.handleCheckboxToggle(e)} alt="checkbox"/>
          </div>

          <div className="operations__sign-type">
            <h3 className="operations__sign-type-header">Отсоединенная</h3>
            <p className="operations__sign-type-description">Подпись будет доступна<br />отдельным файлом</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignaturesType;
