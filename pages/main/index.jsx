"use client";
import React, { useEffect, useRef, useState } from "react";
import s from "./main.module.scss";
import Image from "next/image";
import AnimCard from "@/components/UI/animCard/animCard";
import Intro from "@/components/Intro/Intro";
import NewsCard from "@/components/UI/NewsCard/NewsCard";
const Home = () => {
  const newsArray = [
    {
      id: 1,
      name: "Новость 1",
      date: "18.10.2023",
      image: "./traktor.jpg",
      info: "Ремонтные работы с 25 октября, с 10:00 до 23:00",
    },
    {
      id: 2,
      name: "Новость 2",
      date: "19.10.2023",
      image: "./traktor.jpg",
      info: "Новый сервис для пользователей с 1 ноября",
    },
    {
      id: 3,
      name: "Новость 3",
      date: "20.10.2023",
      image: "./traktor.jpg",
      info: "Изменения в графике работы с 1 ноября",
    },
    {
      id: 4,
      name: "Новость 4",
      date: "21.10.2023",
      image: "./traktor.jpg",
      info: "Праздничное мероприятие 5 ноября в 18:00",
    },
    {
      id: 5,
      name: "Новость 5",
      date: "22.10.2023",
      image: "./traktor.jpg",
      info: "Новые книги в библиотеке, приходите за чтением",
    },
    {
      id: 6,
      name: "Новость 6",
      date: "23.10.2023",
      image: "./traktor.jpg",
      info: "Закрытие выставки искусств 10 ноября в 20:00",
    },
    {
      id: 7,
      name: "Новость 7",
      date: "24.10.2023",
      image: "./traktor.jpg",
      info: "Бесплатные мастер-классы для всех желающих 15 ноября",
    },
  ];

  const lastThreeNews = newsArray.slice(-3).reverse();

  return (
    <main className={s.home}>
      <div className={s.video}>
        <Intro />
      </div>
      <div className={s.cards}>
        <div className={s.card}>
          <AnimCard />
        </div>
        <div className={s.card}>
          <AnimCard />
        </div>
        <div className={s.card}>
          <AnimCard />
        </div>
        <div className={s.card}>
          <AnimCard />
        </div>
      </div>
      <section className={s.news}>
        <h1>Новости компании</h1>
        {lastThreeNews.map((newsItem) => (
          <div key={newsItem.id} className={s.newsCard}>
            <NewsCard info={newsItem.info} date={newsItem.date} />
          </div>
        ))}
        <button className={s.arrow_button}>
          Все новости<span className={s.arrow}></span>
        </button>
      </section>
      <div className={s.button_focus_fixed}>
        <button className={s.button_focus}>
          <a href="https://mail.google.com/mail/u/0/?pli=1#sent?compose=jrjtXPWVTLrksTQsZrSmvPJQvWRrPmmrCXhkJKnZphCkRrqNxgPDbdSHrmcpnmwHsQSpXlKm">
            Связаться с нами
          </a>
        </button>
      </div>
    </main>
  );
};

export default Home;
