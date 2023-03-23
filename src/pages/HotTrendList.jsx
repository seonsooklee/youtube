import React from 'react';
import HotTrendItem from "./HotTrendItem";
import {useQuery} from "@tanstack/react-query";
import videoList from './HotTrendList.module.scss'

export default function HotTrendList(props) {
  const {isLoading, error, data: hotTrend} = useQuery({
    queryKey: ['hotTrend'],
    queryFn: async () => {
      return fetch('data/listByHotTrendVideo.json').then((res) => res.json())
    }
  })

  if (isLoading) return <p>Loading...</p>

  if(error) return <p>{error}</p>

  return (
    <div className={videoList.wrapper}>
      {hotTrend.items.map((item) => (
        <HotTrendItem key={item.id} snippet={item.snippet}/>
      ))}
    </div>
  );
}
