import React, { Component } from 'react';

import TxtImg from '../../img/txt.png';
import JpgImg from '../../img/jpg.png';
import DocImg from '../../img/doc.png';
import HtmlImg from '../../img/html.png';

class FilesList extends Component {
  constructor() {
    super();
    this.state = {
      selectedKey: null
    };
  }
  
  getExtensionIcon(type) {
    switch(type) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return JpgImg;
        break;
      case 'doc':
      case 'docx':
        return DocImg;
        break;
      case 'html':
        return HtmlImg;
        break;
      default:
        return TxtImg;
        break;
    }
  }

  formatSize(size) {
    if (size < 1025) {
      return `${size} байт`
    } else if (size < 1048576) {
      return `${(size / 1024).toFixed(1)} Кб`
    } else {
      return `${(size / 1024 / 1024).toFixed(1)} Мб`
    }
  }

  handleFileCheck(e) {
    let selectedKey = e.target.parentElement.parentElement.getAttribute('data-key')

    this.props.handleFileCheck(selectedKey);
  }
  
  render() {
    return (
      <div className="files__list">
        {
          (this.props.loadedFiles == true) ? 
            (this.props.files.length > 0) ? 
              this.props.files.map((file, index) => {
                let type = file.type.split('/')[1];

                return (
                  <div className="files__file" key={index} data-key={index}>
                    <label 
                      className="files__checkbox"
                      onClick={e => this.handleFileCheck(e)}
                    >
                      <input type="checkbox"/>
                      <span className="files__checkmark"></span>
                    </label>
                    <img src={this.getExtensionIcon(type)} alt={type}/>
                    <div className="files__file-description">
                      <p className="files__file-name">{file.name}</p>
                      <p className="files__file-size">{this.formatSize(file.size)}</p>
                    </div>
                    <div className="files__file-date">
                      от {(new Date(Date.now()).toLocaleString()).split(',')[0]}
                    </div>
                  </div>
                );
              }) 
              : ''
            :
              <div>
                <div className="files__file" data-key={-4}>
                  <label 
                    className="files__checkbox"
                    onClick={e => this.handleFileCheck(e)}
                  >
                    <input type="checkbox"/>
                    <span className="files__checkmark"></span>
                  </label>
                  <img src={TxtImg} alt="txt"/>
                  <div className="files__file-description">
                    <p className="files__file-name">Текстовый документ.txt</p>
                    <p className="files__file-size">29 байт</p>
                  </div>
                  <div className="files__file-date">
                    от 8.06.2018
                  </div>
                </div>

                <div className="files__file" data-key={-3}>
                  <label 
                    className="files__checkbox"
                    onClick={e => this.handleFileCheck(e)}
                  >
                    <input type="checkbox"/>
                    <span className="files__checkmark"></span>
                  </label>
                  <img src={JpgImg} alt="txt"/>
                  <div className="files__file-description">
                    <p className="files__file-name">Изображение.jpg</p>
                    <p className="files__file-size">4.08 Кб</p>
                  </div>
                  <div className="files__file-date">
                    от 8.06.2018
                  </div>
                </div>

                <div className="files__file" data-key={-2}>
                  <label 
                    className="files__checkbox"
                    onClick={e => this.handleFileCheck(e)}
                  >
                    <input type="checkbox"/>
                    <span className="files__checkmark"></span>
                  </label>
                  <img src={DocImg} alt="txt"/>
                  <div className="files__file-description">
                    <p className="files__file-name">Текстовый документ.doc</p>
                    <p className="files__file-size">11.17 Кб</p>
                  </div>
                  <div className="files__file-date">
                    от 8.06.2018
                  </div>
                </div>

                <div className="files__file" data-key={-1}>
                  <label 
                    className="files__checkbox"
                    onClick={e => this.handleFileCheck(e)}
                  >
                    <input type="checkbox"/>
                    <span className="files__checkmark"></span>
                  </label>
                  <img src={HtmlImg} alt="txt"/>
                  <div className="files__file-description">
                    <p className="files__file-name">Гипертекстовая страница.html</p>
                    <p className="files__file-size">46 байт</p>
                  </div>
                  <div className="files__file-date">
                    от 8.06.2018
                  </div>
                </div>
              </div>
          
        }
      </div>
    );
  }
}

export default FilesList;
