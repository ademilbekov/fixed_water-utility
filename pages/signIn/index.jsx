import React from "react";
import SInpUt from "@/components/UI/input/input";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Input } from "antd";
import s from "./signIn.module.scss";
import Link from "next/link";
const signUp = () => {
  return (
    <div className={s.signin}>
      <div className={s.container}>
        <h1>Вход</h1>
        <Input size="large" placeholder="Логин" prefix={<UserOutlined />} />
        <Input
          size="large"
          placeholder="Введите пароль"
          prefix={<LockOutlined />}
        />
        <button className={s.btn}>
          Войти
        </button>
        <div className={s.enter}>
          <p>Еще нет аккаунта?</p>
          <a href="/signUp">Зарегистрируйтесь</a>
        </div>
      </div>
    </div>
  );
};

export default signUp;