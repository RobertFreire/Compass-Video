import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Carrosel from "../Carrosel/Carrosel";
import Footer from "../Footer/Footer";
import MovieInfo from "../MovieInfo/MovieInfo";


const Home = () => {

  return (
    <>
      <Header />
      <MovieInfo />
      <Carrosel title="Em alta" />
      <Footer />
    </>
  );
};

export default Home;
