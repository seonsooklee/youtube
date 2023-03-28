import React from 'react';
import videoCard from './VideoCard.module.scss'
import {formatAgo} from "../../util/dateAgo";
import {useNavigate} from "react-router-dom";
export default function VideoCard({video}) {
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate()
  return (
    <div className={videoCard.wrapper} onClick={() => navigate(`/videos/watch/${video.id}`, {state: {video}})}>
      <img src={thumbnails.medium.url} alt="thumbnail"/>
      <div className={videoCard.title}>{title}</div>
      <div className={videoCard.channelTitle}>{channelTitle}</div>
      <div className={videoCard.date}>{formatAgo(publishedAt)}</div>
    </div>
  );
}
