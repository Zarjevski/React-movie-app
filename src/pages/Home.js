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
  return (
    isLoading ? <Spinner/> : error ? <h1>אירע שגיאה.</h1> :
    <Slider data={data[0].results} heading={"חדשים"}/>
  )
}

const Home = () => {
  return (
    <main>
      <div className="home-wrapper">
      <Slideshow />
      <Popular/>
      <ComingSoon/>
      <UpComing/>
      </div>
    </main>
  );
};

export default Home;
