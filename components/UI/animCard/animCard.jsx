import s from "./AnimCard.module.scss";
import React from "react";
import Link from "next/link";
import styledBtn from "../styledBtn/styledBtn";

const AnimCard = ({ name, id, img }) => {

    return (
      <div className={s.tile}>
        <div className={s.card}>
          <img src={img} alt="img" />
          <div className={`${s.side} ${s.front}`}>
            <h1>{name}</h1>
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
                <Link href={`/cityinfo/${id}`}>
                  <styledBtn>
                    Узнать
                  </styledBtn>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AnimCard;