import React from 'react';

export class Video extends React.Component {
    render() {
        return (
            <div>
                { /* Give <video /> a src attribute. Make src equal to the passed-in video file. */}
                {/* Video uses this info to display the chosen video. */}
                <video controls autostart autoPlay muted src={this.props.src} />
            </div>
        );
    }
}