import React from "react";
import SInpUt from "@/components/UI/input/input";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Input } from "antd";
import s from "./signUp.module.scss";
import Link from "next/link";
const signUp = () => {
  return (
    <div className={s.signin}>
      <div className={s.container}>
        <h1>Регистрация</h1>
        <Input size="large" placeholder="Логин" prefix={<UserOutlined />} />
        <Input
          size="large"
          placeholder="Укажите вашу почту"
          prefix={<MailOutlined />}
        />
        <Input
          size="large"
          placeholder="Введите пароль"
          prefix={<LockOutlined />}
        />
          <Input
          size="large"
          placeholder="Повторите пароль"
          prefix={<LockOutlined />}
        />
        <button className={s.btn}>
          Зарегистрироваться
        </button>
        <div className={s.enter}>
          <p>Уже есть аккаунт?</p>
          <a href="/signIn">Войти</a>
        </div>
      </div>
    </div>
  );
};

export default signUp;
