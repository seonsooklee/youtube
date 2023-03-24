import React from 'react';
import VideoCard from "../components/VideoCard.jsx/VideoCard";
import {useQuery} from "@tanstack/react-query";
import videoList from './HotTrendList.module.scss'
import {useNavigate} from "react-router-dom";

export default function HotTrendList(props) {
  const navigate = useNavigate()

  const {isLoading, error, data: hotTrend} = useQuery({
    queryKey: ['hotTrend'],
    queryFn: async () => {
      return fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCYcSYz8l4GfKcwQjFaKPMfzcxLtkSc2T4').then((res) => res.json())
    }
  })

  const onClickDetail = (id) => {
    navigate(`detail?id=${id}`)
  }

  if (isLoading) return <p>Loading...</p>

  if(error) return <p>{error}</p>

  return (
    <div className={videoList.wrapper}>
      {hotTrend.items.map((item) => (
        <VideoCard key={item.id} id={item.id} snippet={item.snippet}/>
      ))}
    </div>
  );
}
