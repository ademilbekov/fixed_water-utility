import s from "./AnimCard.module.scss";
import React from "react";
import Link from "next/link";
import styledBtn from "../styledBtn/styledBtn";
import sink from "../../../public/sik.jpg";
import Image from "next/image";
import buttonPulse from "../btn/ButtonPulse";
// `/cityinfo/${id}`
const AnimCard = ({ name, id, img }) => {
  return (
    <div className={s.tile}>
      <div className={s.card}>
        <Image src={sink} alt="img" />
        <div className={`${s.side} ${s.front}`}>
          <h1>Примерная карта для водоканала</h1>
        </div>
        <div className={`${s.side} ${s.back}`}>
          <div className={s.bio}>
            <h1>{name}</h1>
            <p>
              Camille Preaker, an emotional (and physically) scarred reporter
              for the (fictional) St. Louis Chronicle, who escaped her hometown
              of Wind Gap MO after a difficult childhood.
            </p>
            <div className={s.btn}>
              <Link href="/">{buttonPulse()}Узнать</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimCard;
