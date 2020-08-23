import React, { Component } from 'react';
import VideoPlayer from '../additional/videojs/video';
import { Container } from 'semantic-ui-react';
import MarqueeText from 'react-marquee-text-component';

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [{
    src: 'https://www.youtube.com/watch?v=Oi0sVRZ_49c&t=3674s',
    type: 'video/youtube'
  }]
}

class DashboardApp extends Component {
  render() { 
    const text = `Welcome to titiktemu guys!, use titiktemu to find, share, and live your inner potential, let's make our learning fun and exciting together!.     `;
    return (
      <>
        <MarqueeText text={text}/>
        <Container>
          <VideoPlayer { ...videoJsOptions } />
        </Container>
      </>
    );
  }
}
 
export default DashboardApp;