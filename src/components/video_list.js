import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const videoItems = props.videos.map((myVideo) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={myVideo.etag}
        video={myVideo} />
    );
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
};

export default VideoList;
