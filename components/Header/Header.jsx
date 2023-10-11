import React from "react";
import s from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

Link;
const Header = () => {
  return (
    <header className={s.Header}>
      <div className={s.header_upper}>
        <Image></Image>
      </div>
      <div className={s.header_links}>
        <div className={s.header_link_left}>
          <Link href="">Для абонентов</Link>
          <Link href="">Услуги</Link>
          <Link href="">Новости</Link>
        </div>
        <div className={s.header_link_middle}>
          <Link href="/aboutus">О водоканале</Link>
          <Link href="">Вакансии</Link>
          <Link href="">Контакты</Link>
          <Link href="">Электронная площадка</Link>
          <Link href=""></Link>
        </div>
        <div className={s.header_title_right}>
        
        </div>
      </div>
    </header>
  );
};

export default Header;
