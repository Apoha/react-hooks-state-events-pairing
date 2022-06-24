import React, { useState } from "react";
import video from "../data/video.js";
import VideoProfile from "./VideoProfile.js";

function App() {
  console.log("Here's your data:", video);



  const [videoInfo, setVideoInfo] = useState(video)


  function uploadVideo() {

    setVideoInfo(videoInfo)
  }



  return (
    <div className="App">

      <VideoProfile  text={video.title} embedUrl={video.embedUrl} views={video.views} createdAt={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes} comments={video.comments} video={video} uploadVideo={uploadVideo} />
    </div>


  );

}
export default App;
