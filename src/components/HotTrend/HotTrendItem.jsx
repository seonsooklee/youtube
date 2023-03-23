import React from 'react';
import videoItem from './HotTrendItem.module.scss'

export default function HotTrendItem({snippet}) {
  return (
    <div className={videoItem.wrapper}>
      <img src={snippet.thumbnails.medium.url} alt="thumbnail"/>
      <div className={videoItem.title}>{snippet.title}</div>
      <div className={videoItem.channelTitle}>{snippet.channelTitle}</div>
      <div className={videoItem.date}>{snippet.publishedAt}</div>
    </div>
  );
}
