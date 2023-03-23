import React from 'react';
import {useQuery} from "@tanstack/react-query";
import SearchItem from "./SearchItem";
import searchResultList from './SearchResultList.module.scss'

export default function SearchResultList() {

  const {isLoading, error, data: keyword} = useQuery({
    queryKey: ['keyword'],
    queryFn: async () => {
      return fetch('data/listByKeyword.json').then((res) => res.json())
    }
  })

  if (isLoading) return <p>Loading...</p>

  if(error) return <p>{error}</p>

  return (
    <div className={searchResultList.wrapper}>
      {keyword.items.map((item, index) => (
        <SearchItem key={index} snippet={item.snippet}/>
      ))}
    </div>
  );
}
