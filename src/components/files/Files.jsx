import React, { Component } from 'react';

import DragAndDrop from './DragAndDrop.jsx';
import LoadedFiles from './LoadedFiles.jsx';
import FilesList from './FilesList.jsx';

class Files extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      selectedKey: null
    }
  }

  handleDrop(files) {
    this.setState({ files: files.concat(this.state.files) });
  }

  handleFileCheck(key) {
    this.setState({ selectedKey: key });

    this.resetFileCheck();
    this.props.onDropEnd();
  }

  resetFileCheck() {
    let selectedKey = this.state.selectedKey;
    let files = document.querySelectorAll('[data-key]');
    
    for (let i = 0; i < files.length; i++) {
      if (files[i].getAttribute('data-key') != selectedKey) {
        files[i].children[0].children[0].checked = false;
      } 
    }
  }
  
  render() {
    return (
      <div className="content__part files">
        <div className="content__point">
          <span className="content__point-text">1</span>
        </div>
        <h2 className="content__header">
          Загрузите или выберите файл для подписи
        </h2>
      
        <div className="files__columns">
          <div className="files__column">
            <p className="files__action-description">Загрузите с компьютера:</p>
            <DragAndDrop onDropFiles={this.handleDrop.bind(this)} />
          </div>
          <div className="files__separator">или</div>
          <div className="files__column">
            <p className="files__action-description">Выберите из списка:</p>
            <FilesList loadedFiles={false} handleFileCheck={this.handleFileCheck.bind(this)} />
          </div>
        </div>
      
        <LoadedFiles files={this.state.files} handleFileCheck={this.handleFileCheck.bind(this)} />
      </div>
    );
  }
}

export default Files;
