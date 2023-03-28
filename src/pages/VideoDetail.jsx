import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {related} from "../api/youtube";
import videoDetail from './VideoDetail.module.scss'
import RelativeItem from "../components/RelativeList/RelativeItem";

function VideoDetail() {
  const {videoId} = useParams();
  const {state: {video}} = useLocation();
  const {title, channelTitle, description, thumbnails} = video.snippet;

  const {data: relatedVideo} = useQuery(
    ['related', videoId],
    () => related(videoId)
  );

  return (
    <div className={videoDetail.wrapper}>
      <div className={videoDetail.detailWrapper}>
        <iframe
          id="player"
          title={title}
          width="640"
          height="360"
          src={`http://www.youtube.com/embed/${video.id}`}/>
        <div>
          <div className={videoDetail.title}>{title}</div>
          <div className={videoDetail.channelWrapper}>
            <div className={videoDetail.imageWrapper}>
              <img src={thumbnails.default.url} alt={channelTitle}/>
            </div>
            <div>{channelTitle}</div>
          </div>
          <div className={videoDetail.description}>{description}</div>
        </div>
      </div>
      <div className={videoDetail.relatedVideoWrapper}>
        {relatedVideo &&
          relatedVideo.map((item, index) => (
            <RelativeItem key={index} video={item}/>
          ))
        }
      </div>
    </div>
  );
}

export default VideoDetail;
