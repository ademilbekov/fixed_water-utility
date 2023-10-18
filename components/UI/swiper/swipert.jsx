import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../app/swipert.css";
import { Pagination } from "swiper/modules";
import worker from "../../../public/worker.png";
import Image from "next/image";
import emply from "../../../public/33.jpg";
import s from "./swiper.module.scss";
export default function swipert() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swipert"
      >
        <SwiperSlide>
          <div className={s.text}>
            <h1>
              Квалифицииорованные сотрудники, <br /> заботящиеся о вашем
              здороьве
              <br />и качестве воды!
            </h1>
          </div>
          <Image className={s.img} src={worker} />
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.text}>
            <h1>
              Квалифицииорованные сотрудники, <br /> заботящиеся о вашем
              здороьве
              <br />и качестве воды!
            </h1>
          </div>
          <Image className={s.img} src={emply} />
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.text}>
            <h1>
              Квалифицииорованные сотрудники, <br /> заботящиеся о вашем
              здороьве
              <br />и качестве воды!
            </h1>
          </div>
          <Image className={s.img} src={worker} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
