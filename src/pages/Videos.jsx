import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";

function Videos(props) {
  const { keyword } = useParams();

  const {isLoading, error, data: videos} = useQuery(
    ['videos', keyword],
    async () => {
      return fetch(
        `/data/
        ${ keyword ? 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='+keyword+'&key=AIzaSyCYcSYz8l4GfKcwQjFaKPMfzcxLtkSc2T4' : 
        'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCYcSYz8l4GfKcwQjFaKPMfzcxLtkSc2T4'}`
      )
        .then((res) => res.json())
        .then((data) => data.items);
    });


  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos?.map((item, index) => <div key={index}>{item.snippet.title}</div>)}
    </div>
  );
}

export default Videos;
