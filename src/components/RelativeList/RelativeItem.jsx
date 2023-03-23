import React from 'react';
import relativeItem from './RelativeItem.module.scss'

export default function RelativeItem({snippet, onClick}) {
  return (
    <div className={relativeItem.wrapper} onClick={onClick}>
      <img src={snippet.thumbnails.medium.url} alt=""/>
      <div className={relativeItem.descriptionWrapper}>
        <div className={relativeItem.title}>{snippet.title}</div>
        <div className={relativeItem.channelTitle}>{snippet.channelTitle}</div>
        <div className={relativeItem.date}>{snippet.publishedAt}</div>
      </div>
    </div>
  );
}
