import React from 'react';
import './iframesystem.css';

class System extends React.Component {
  render() {
    return (
      <div>
        <iframe title="system" src={this.props.src} height={this.props.height} width={this.props.width} className="iframesystem" />
      </div>
    );
  }
}

export default System;
