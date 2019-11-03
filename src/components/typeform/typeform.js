import * as typeformEmbed from '@typeform/embed';
import React, { Component } from 'react';

import '../../index.css';

class Typeform extends Component {
  componentDidMount() {
    const slide = typeformEmbed.makePopup(
      'https://developerplatform.typeform.com/to/Xc7NMh',
      {
        mode: 'drawer_right',
        hideHeaders: true,
        hideFooters: true,
        onSubmit: function () {
          console.log('Typeform submitted')
        }
      }
    )
    document.getElementById('bt-popup').addEventListener('click', function
    () {
      slide.open();
    });
  }

  render() {
    return (
      <div id="bt-popup" className="feedback-btn">
        Give feedback to us!
      </div>
    )
  }
}

export default Typeform;

