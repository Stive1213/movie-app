
import './App.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
function App(){
const [video, setVideo] = useState("inception");
const [videoUrl, setVideoUrl] = useState("https://youtu.be/sa9l-dTv9Gk");

function handleSearch(){
  movieTrailer(video).then((res) => {
    setVideoUrl(res);
  });
}

return (
  <div className="App">
    <div className='search-box'>
      <label>
        search for any movies/shows:{" "}
      </label>
      <input type='text' onChange={(e) => { setVideo(e.target.value)}}>
      </input>
      <button onClick={handleSearch()}>Search</button>
    </div>
    <ReactPlayer url={videoUrl} controls={true} />
  </div>
);

}
export default App