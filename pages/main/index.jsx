"use client";

import React, { useEffect, useRef, useState } from "react";
import s from "./main.module.scss";
import Image from "next/image";
import AnimCard from "@/components/UI/animCard/animCard";
import Swipert from "../../components/UI/swiper/swipert";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './main.css';
const Home = () => {
  const videoRef = useRef();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      videoRef.current.autoplay = true;
    }, 3600);
  }, []);

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={s.main}>
      <div className={s.desc}>
        <video
        className={s.video}
          ref={videoRef}
          controls={false}
          muted
          loop
          autoPlay={true}
          // style={{ width: "100%", height:"100px"}}
        >
          <source src="/bishkek.mp4" />
        </video>
      </div>
      <div className={s.cards}>
        <div className={s.card}>
          <AnimCard />
        </div>
      </div>
    </main>
  );
};

export default Home;
