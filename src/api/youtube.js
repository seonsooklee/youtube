import axios from "axios";

const httpClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {key: process.env.REACT_APP_YOUTUBE_API_KEY}
})

export const search = async (keyword) => {
  return httpClient
    .get('search',{
      params: {
        part: 'snippet',
        maxResults: 25,
        q: 'surfing',
      }
    })
    .then(res => res.data.items)
    .catch(error => console.log(error))
}

export const hotTrend = async () => {
  return httpClient
    .get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25
      }
    })
    .then(res => res.data.items)
    .catch(error => console.log(error))
}

