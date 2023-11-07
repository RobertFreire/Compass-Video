// EpisodeList.tsx
import React from "react";
import style from "./EpisodeList.module.css";
interface EpisodeProps {
  name: string;
  duration: string;
  description: string;
  image?: string;
}

const EpisodeList: React.FC<EpisodeProps> = ({ name, duration, description, image }) => {
  
  return (
    <div className={style.container}>
      <div className={style.item}>
        <img className={style.imagem} src={image} alt={name} />
        <div className={style.text}>
          <div className={style.title_area}>
            <h3>{name}</h3>
            <h6 className={style.dur}>{duration} min</h6>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EpisodeList;

