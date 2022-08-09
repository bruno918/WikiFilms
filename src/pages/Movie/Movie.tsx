import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import * as ApiTmbService from '../../services/apiTmdb'
import MovieInterface from "../../models/interfaces/Movie";
import VideoFrame from "../../components/atoms/VideoFrame";
import Title from "../../components/atoms/Title";
import Navbar from "../../components/molecules/Navbar";
import BackgroundSlider from "react-background-slider";
function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieInterface>()
  const [videoKey, setVideoKey] = useState<string>()

  const imgUrl = 'https://image.tmdb.org/t/p/w300'
const imgOriginal = 'https://image.tmdb.org/t/p/original'
  useEffect(() => {
    if (!id || movie) return
    ApiTmbService.getMovieDetails(+id)
      .then((response) => {
        setMovie(response)

        const video = response.videos && response.videos.results && response.videos.results[0]
        video && setVideoKey(video.key)
      })
  }, [id, movie])
const img = movie && movie.backdrop_path
const bg =  'https://image.tmdb.org/t/p/original' + img
  return <>
<Navbar />
<BackgroundSlider
  images={[bg]}
  duration={50} transition={2} />
          <Title className="Tdestaque">{movie && movie.title}</Title>
          <div className="Sdestaque2">
    <h2>{movie && movie.overview}</h2>
  
   
    <br />
   
      {videoKey && <VideoFrame width="550" height="300" videoKey={videoKey + ''} />}
  </div>
  </>
}

export default Movie