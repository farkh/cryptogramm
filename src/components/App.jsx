import React, { Component } from 'react';

import style from '../index.scss';

import Header from './Header.jsx';
import Files from './files/Files.jsx';
import Operations from './operations/Operations.jsx';
import SignaturesType from './SignaturesType.jsx';
import PrimaryButton from './PrimaryButton';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showOperations: false,
      showSignaturesType: false,
      showPrimaryButton: false
    };
  }

  handleOperationsShow() {
    this.setState({ showOperations: true });
  }

  handleButtonShow() {
    this.setState({ showPrimaryButton: true });
  }

  handleSignaturesTypeShow(bool) {
    this.setState({ showSignaturesType: bool });
  }
  
  render() {
    return (
      <div className="app">
        <Header />

        <div className="content">
          <Files onDropEnd={this.handleOperationsShow.bind(this)} />
          { this.state.showOperations && <Operations onChooseAny={this.handleButtonShow.bind(this)} onChooseSign={this.handleSignaturesTypeShow.bind(this)} />}
          { this.state.showSignaturesType && <SignaturesType /> }
          { this.state.showPrimaryButton && <PrimaryButton /> }
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default App;
