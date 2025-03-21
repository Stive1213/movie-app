
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


}
export default App