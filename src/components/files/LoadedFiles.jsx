import React, { Component } from 'react';

import FilesList from './FilesList.jsx';

class LoadedFiles extends Component {
  onFileCheck(key) {
    this.props.handleFileCheck(key);
  }
  
  render() { 
    return (
      <div className="files__loaded-files">
        <p className="files__action-description">Загруженные файлы:</p>

        <FilesList files={this.props.files} loadedFiles={true} handleFileCheck={this.onFileCheck.bind(this)} />
      </div>
    );
  }
}

export default LoadedFiles;
