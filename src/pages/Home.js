import React from "react";
import Slideshow from "../components/Slideshow";
import Slider from "../components/Slider";
import { usePopular, useComingSoon, useNew } from "../api/TMDB";
import Spinner from "../components/Spinner";


const Popular = () => {
  const {data,isLoading,error} = usePopular();
  return (
    isLoading ? <Spinner/> : error ? <h1>אירע שגיאה.</h1> :
    <Slider data={data[0].results} heading={"פופולרים"}/>
  )
}

const ComingSoon = () => {
  const {data,isLoading,error} = useComingSoon()
  return (
    isLoading ? <Spinner/> : error ? <h1>אירע שגיאה.</h1> :
    <Slider data={data[0].results} heading={"בקולנוע"}/>
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
      <Popular/>
      <ComingSoon/>
      <New/>
    </main>
  );
};

export default Home;
