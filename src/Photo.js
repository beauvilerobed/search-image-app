import React from "react";
import style from "./photo.module.css";

const Photo = ({ title, identification, farmId, serverId, secret }) => {
  return (
    <div className={style.photo}>
      <h1 className={style.title}>{title}</h1>
      <img
        className={style.image}
        src={`https://farm${farmId}.staticflickr.com/${serverId}/${identification}_${secret}.jpg`}
        alt=""
      />
    </div>
  );
};

export default Photo;
