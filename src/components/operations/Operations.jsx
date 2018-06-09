import React, { Component } from 'react';

import Operation from './Operation.jsx';
import SignImg from '../../img/sign.png';
import CheckSignImg from '../../img/check.png';
import EncryptImg from '../../img/encrypt.png';
import DecryptImg from '../../img/decrypt.png';
import SignActiveImg from '../../img/sign_active.png';
import CheckActiveImg from '../../img/check_active.png';
import EncryptActiveImg from '../../img/encrypt_active.png';
import DecryptActiveImg from '../../img/decrypt_active.png';

class Operations extends Component {
  constructor() {
    super();
    this.state = {
      selectedOptionKey: null
    };

    this.activateOption = this.activateOption.bind(this);
  }

  handleOptionSelect(key) {
    this.activateOption(key);
    this.setState({ selectedOptionKey: key });

    if (key == 0 || key == 1) {
      this.props.onChooseSign(true);
    } else {
      this.props.onChooseSign(false);
    }
    this.props.onChooseAny();
  }

  activateOption(key) {
    let selectedKey = this.state.selectedOptionKey;
    let options = document.querySelectorAll('[data-option-key]');
    
    this.resetHighlight(options);
    
    options[key].classList.add('operations__operation-active');
  }

  resetHighlight(options) {
    for (let i = 0; i < 4; i++) {
      options[i].classList.remove('operations__operation-active');
    }
  }
  
  render() {
    return (
      <div className="content__part">
        <div className="content__point">
          <span className="content__point-text">2</span>
        </div>
        <h2 className="content__header">
          Выберите операцию
        </h2>

        <div className="operations">
          <Operation 
            key={0} 
            dataKey={0}
            imageUri={SignImg}
            activeImageUri={SignActiveImg}
            imageAlt='Sign' 
            operationName='Подписать' 
            handleOptionSelect={this.handleOptionSelect.bind(this)}
          />
          <Operation 
            key={1} 
            dataKey={1} 
            imageUri={CheckSignImg} 
            activeImageUri={CheckActiveImg}
            imageAlt='Check sign'
            operationName='Проверить подпись' 
            handleOptionSelect={this.handleOptionSelect.bind(this)}
          />
          <Operation 
            key={2} 
            dataKey={2} 
            imageUri={EncryptImg}
            activeImageUri={EncryptActiveImg}
            imageAlt='Encrypt' 
            operationName='Зашифровать' 
            handleOptionSelect={this.handleOptionSelect.bind(this)}
          />
          <Operation 
            key={3} 
            dataKey={3} 
            imageUri={DecryptImg} 
            activeImageUri={DecryptActiveImg}
            imageAlt='Decrypt' 
            operationName='Расшифровать' 
            handleOptionSelect={this.handleOptionSelect.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Operations;
