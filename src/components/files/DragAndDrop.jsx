import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import UploadImg from '../../img/upload.png';
import UploadActiveImg from '../../img/upload_active.png';

class DragAndDrop extends Component {

  onDrop(files) {
    this.props.onDropFiles(files);
  }
  
  render() {
    return (
      <Dropzone className="files__dragndrop" acceptClassName="files__dragndrop-active" onDrop={(files) => this.onDrop(files)}>
        <img src={UploadImg} className="files__upload-icon" alt="Upload"/>
        <img src={UploadActiveImg} className="files__upload-active-icon" alt="Upload Active"/>

        <p className="files__upload-description">
          Перетащите файлы сюда<br />или <span className="g--link">выберите на компьютере</span>
        </p>
      </Dropzone>
    );
  }
}

export default DragAndDrop;
