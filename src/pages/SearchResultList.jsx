import React from 'react';
import {useQuery} from "@tanstack/react-query";
import SearchItem from "../components/SearchResult/SearchItem";
import searchResultList from './SearchResultList.module.scss'
import {useNavigate, useSearchParams} from "react-router-dom";

export default function SearchResultList() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const {isLoading, error, data: keyword} = useQuery({
    queryKey: ['keyword'],
    queryFn: async () => {
      return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchParams.get('keyword')}&key=AIzaSyCYcSYz8l4GfKcwQjFaKPMfzcxLtkSc2T4`).then((res) => res.json())
    }
  })

  const onClickDetail = (channelId, videoId) => {
    navigate(`/detail?id=${channelId}&videoId=${videoId}`)
  }

  if (isLoading) return <p>Loading...</p>

  if(error) return <p>{error}</p>

  return (
    <div className={searchResultList.wrapper}>
      {keyword.items.map((item, index) => (
        <SearchItem key={index} snippet={item.snippet} onClick={() => onClickDetail(item.snippet.channelId, item.id.videoId)}/>
      ))}
    </div>
  );
}
