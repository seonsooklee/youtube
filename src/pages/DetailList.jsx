import React from 'react';
import DetailItem from "../components/DetailItem/DetailItem";
import RelativeList from "../components/RelativeList/RelativeList";
import detailList from './DetailList.module.scss'
import {useQuery} from "@tanstack/react-query";
import {useSearchParams} from "react-router-dom";

export default function DetailList() {
  const [searchParams] = useSearchParams()

  const {isLoading, error, data} = useQuery({
    queryKey: ['detail'],
    queryFn: async () => {
      return fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${searchParams.get('id')}&key=AIzaSyCYcSYz8l4GfKcwQjFaKPMfzcxLtkSc2T4`).then((res) => res.json())
    }
  })

  if (isLoading) return <p>Loading...</p>

  if(error) return <p>{error}</p>
  return (
    <div className={detailList.wrapper}>
      <DetailItem snippet={data.items[0].snippet} />
      <RelativeList videoId={searchParams.get('videoId')}/>
    </div>
  );
}
