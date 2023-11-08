import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Header from "../Header/Header";
import Carrosel from "../Carrosel/Carrosel";
import Footer from "../footer/Footer";
import MovieInfo from "../MovieInfo/MovieInfo";


const Home = () => {

  return (
    <>
      <Header />
      <MovieInfo location="movie"/>
      <Carrosel title="Em alta" />
      <Footer />
    </>
  );
};

export default Home;
