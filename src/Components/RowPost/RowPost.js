import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../Axios';
import { API_KEY, imageUrl } from '../../Constats/Constants';
import YouTube from 'react-youtube';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [UrlId, setUrlId] = useState('');
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log('arrey is empty');
        }
      });
  };

  return (
    <div className='row'>
      <h2>{props.title} </h2>
      <div className='posters'>
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? 'smallPoster' : 'poster'}
            src={`${imageUrl + obj.poster_path}`}
            alt='poster'
          />
        ))}
      </div>
      {UrlId && <YouTube videoId={UrlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
