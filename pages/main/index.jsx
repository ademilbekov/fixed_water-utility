"use client";

import React, { useEffect, useRef } from "react";
import s from "./main.module.scss";
import Image from "next/image";
import AnimCard from "@/components/UI/animCard/animCard";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './main.css';
const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <main className={s.main}>
      <div className={s.desc}>
      
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
