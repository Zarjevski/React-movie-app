import React from "react";
import Slideshow from "../components/Slideshow";
import Slider from "../components/Slider";
import { useTrading } from "../api/TMDBapi";
import Spinner from "../components/Spinner";

const Home = () => {
    // const {data,error,isLoading} = useTrading()
    // console.log(data,error,isLoading);
  const exampleArray = [1, 2, 3, 4, 5, 6, 7];
  return (
    <main>
      <Slideshow />
      <Slider data={exampleArray} />
      <Spinner/>
    </main>
  );
};

export default Home;
