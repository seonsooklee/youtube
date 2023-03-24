import React from 'react';
import videoCard from './VideoCard.module.scss'

export default function VideoCard({video}) {
  return (
    <div className={videoCard.wrapper}>
      <img src={video.thumbnails.medium.url} alt="thumbnail"/>
      <div className={videoCard.title}>{video.title}</div>
      <div className={videoCard.channelTitle}>{video.channelTitle}</div>
      <div className={videoCard.date}>{video.publishedAt}</div>
    </div>
  );
}
