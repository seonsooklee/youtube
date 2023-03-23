import React from 'react';
import RelativeItem from "./RelativeItem";
import {useQuery} from "@tanstack/react-query";
import relativeList from './RelativeList.module.scss'

export default function RelativeList({videoId}) {
  const {isLoading, error, data} = useQuery({
    queryKey: ['relative'],
    queryFn: async () => {
      return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=AIzaSyCYcSYz8l4GfKcwQjFaKPMfzcxLtkSc2T4`).then((res) => res.json())
    }
  })

  if (isLoading) return <p>Loading...</p>

  if(error) return <p>{error}</p>

  return (
    <div className={relativeList.wrapper}>
      {
        data.items.map((item) => (
          <RelativeItem key={item.id.videoId} snippet={item.snippet} onClick={() => onClickDetail(item.snippet.channelId)}/>
        ))}
    </div>
  );
}
