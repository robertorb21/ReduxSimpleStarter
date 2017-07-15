import React from 'react'

//const VideoListItem = (props) => {
//const video = props.video
//esas dos lineas las podemos hacer una si le agregamos {} al parametro props y le ponemos direactamente la propiedad
const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url
  //console.log(video)
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem
