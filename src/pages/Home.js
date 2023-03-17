import React from "react";
import Slideshow from "../components/Slideshow";
import Slider from "../components/Slider";
import { useTrading, useInTheater, useNew } from "../api/TMDB";
import Spinner from "../components/Spinner";


const Trading = () => {
  const {data,isLoading,error} = useTrading()
  return (
    isLoading ? <Spinner/> : error ? <h1>אירע שגיאה.</h1> :
    <Slider data={data} heading={"חם עכשיו"}/>
  )
}

const Theater = () => {
  const {data,isLoading,error} = useInTheater()
  return (
    isLoading ? <Spinner/> : error ? <h1>אירע שגיאה.</h1> :
    <Slider data={data} heading={"בקולנוע"}/>
  )
}

const New = () => {
  const {data,isLoading,error} = useNew()
  return (
    isLoading ? <Spinner/> : error ? <h1>אירע שגיאה.</h1> :
    <Slider data={data} heading={"חדשים"}/>
  )
}

const Home = () => {
  return (
    <main>
      <Slideshow />
      <Trading/>
      <Theater/>
      <New/>
    </main>
  );
};

export default Home;
