import React from 'react';
import relativeItem from './RelativeItem.module.scss'
import {formatAgo} from "../../util/dateAgo";
export default function RelativeItem({video, onClick}) {
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  return (
    <div className={relativeItem.wrapper} onClick={onClick}>
      <img src={thumbnails.medium.url} alt={title}/>
      <div className={relativeItem.descriptionWrapper}>
        <div className={relativeItem.title}>{title}</div>
        <div className={relativeItem.channelTitle}>{channelTitle}</div>
        <div className={relativeItem.date}>{formatAgo(publishedAt)}</div>
      </div>
    </div>
  );
}
