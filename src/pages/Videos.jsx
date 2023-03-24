import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import VideoCard from "../components/VideoCard.jsx/VideoCard";
import videoList from './VideoList.module.scss'
import {hotTrend, search} from "../api/youtube";

function Videos(props) {
  const {keyword} = useParams();

  const {isLoading, error, data: videos} = useQuery(
    ['videos', keyword],
    () => keyword ? search(keyword) : hotTrend()
  );


  return (
    <div className={videoList.wrapper}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos?.map((item, index) => <VideoCard key={index} video={item.snippet}/>)}
    </div>
  );
}

export default Videos;
