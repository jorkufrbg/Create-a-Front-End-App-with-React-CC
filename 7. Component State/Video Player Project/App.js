import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
    fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

/* The App component class has one property stored as state: a src containing the address of a video file. App‘s job is to pass this src down to a stateless component, and to pass the ability to change the src down to a different stateless component. */
class App extends React.Component {
    constructor(props) {
        super(props);
        /* Bind .chooseVideo() to the current value of this and store it in this.chooseVideo */
        this.chooseVideo = this.chooseVideo.bind(this);
        this.state = { src: VIDEOS.fast };
    }

    /* Give App a new property named chooseVideo. Set chooseVideo‘s value equal to a function with one parameter, named newVideo. */
    chooseVideo(newVideo) {
        /* chooseVideo is going to get passed a string: either 'fast', 'slow', 'cute', or 'eek'. It will use this string to choose a new src, which it will use to update this.state.src. In the body of chooseVideo, call this.setState. Set this.state.src equal to VIDEOS[newVideo]. */
        this.setState({
            src: VIDEOS[newVideo]
        }
        );
    }

    render() {
        return (
            <div>
                <h1>Video Player</h1>
                {/* App also passes down the ability to change this.state.src to Menu */}
                {/* Give Menu a chooseVideo attribute. Set chooseVideo‘s value equal to the chooseVideo function. */}
                <Menu chooseVideo={this.chooseVideo} />
                {/*App passes down this.state.src to Video*/}
                { /* <Video /> has an attribute(src), and the attribute’s value equal to the src property stored in this.state. */}
                <Video src={this.state.src} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);