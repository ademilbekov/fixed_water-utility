import React from "react";
import s from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import facebook from "../../assets/facebook.png";
import inst from "../../assets/pngwing.com.png";
import user from '../../assets/user.png'
Link;
const Header = () => {
  return (
    <header className={s.Header}>
      <div className={s.header_upper}>
        <div className={s.logo}>
          <h1>БишкекСууКанал</h1>
        </div>
        <div className={s.language}>
          <button>KG</button>
          <button>RUS</button>
        </div>
        <div className={s.sign_up}>
          <Image className={s.user} src={user}/>
          <Link href="/">личный кабинет</Link>
        </div>
        <div className={s.info}>
          <div className={s.number}>
            <p className={s.name_of_number}>ОТДЕЛ КАДРОВ</p>
            <p className={s.number_of_number}>54-42-45</p>
          </div>
          <div className={s.number}>
            <p className={s.name_of_number}>СЛУЖБА «ВОДОСНАБЖЕНИЯ»</p>
            <p className={s.number_of_number}>44-97-03</p>
          </div>
          <div className={s.number}>
            <p className={s.name_of_number}>СЛУЖБА «ВОДООТВЕДЕНИЯ»</p>
            <p className={s.number_of_number}>88-09-63</p>
          </div>
        </div>
      </div>
      <div className={s.header_links}>
        <div className={s.header_link_left}>
          <Link href="">Для абонентов</Link>
          <Link href="">Услуги</Link>
          <Link href="">Новости</Link>
        </div>
        <div className={s.header_link_middle}>
          <Link href="/aboutus">О нас</Link>
          <Link href="">Вакансии</Link>
          <Link href="">Контакты</Link>
          <Link href="">Площадка</Link>
        </div>
        <div className={s.header_link_right}>
          <Image className={s.facebook} src={facebook}/>
          <Image src={inst}/>
          <a href="https://bishkek.gov.kg/ru">Сайт мэрии</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
