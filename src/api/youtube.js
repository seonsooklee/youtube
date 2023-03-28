import axios from "axios";

const httpClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {key: process.env.REACT_APP_YOUTUBE_API_KEY, part: 'snippet'}
})

export const search = async (keyword) => {
  return httpClient
    .get('search', {
      params: {
        maxResults: 25,
        q: keyword,
      }
    })
    .then(res => res.data.items)
    .catch(error => console.log(error))
}

export const hotTrend = async () => {
  return httpClient
    .get('videos', {
      params: {
        chart: 'mostPopular',
        maxResults: 25
      }
    })
    .then(res => res.data.items)
    .catch(error => console.log(error))
}

export const related = async (id) => {
  return httpClient
    .get('search', {
      params: {
        relatedToVideoId: id,
        type: 'video'
      }
    })
    .then(res => res.data.items)
    .catch(error=> console.log(error))
}

