import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import { Link, useParams } from "react-router-dom";

//icons
import { IoMdArrowRoundBack } from "react-icons/io";
const MovieWatch = () => {
  const [video, setVideo] = useState([]);

  const params = useParams();
  useEffect(() => {
    getVideo();
   
  }, []);
  const getVideo = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=0893444ee2929a0639406fafa887500c&language=en-US`
      );
      setVideo(res.data.results[0].key);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen w-screen relative overflow-x-hidden">
      <Link to="/home">
        <IoMdArrowRoundBack className="font-semibold text-gray-400 absolute text-4xl top-16 left-5 cursor-pointer" />
      </Link>
      <iframe
        className="w-screen h-screen"
        src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="autoplay"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieWatch;
