import React from "react";
import Slideshow from "../components/Slideshow";
import Slider from "../components/Slider";
import { usePopular, useComingSoon, useUpComing } from "../api/TMDB";
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

const UpComing = () => {
  const {data,isLoading,error} = useUpComing()
  console.log(data);
  return (
    isLoading ? <Spinner/> : error ? <h1>אירע שגיאה.</h1> :
    <Slider data={data[0].results} heading={"חדשים"}/>
  )
}

const Home = () => {
  return (
    <main>
      <Slideshow />
      <Popular/>
      <ComingSoon/>
      <UpComing/>
    </main>
  );
};

export default Home;
