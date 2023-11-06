import style from "./EpisodeList.module.css";
import placeHolder from "../../assets/Images/placeholder.jpg";

interface EpisodeProps{
    name: string,
    duration: string,
    description: string,
}

function EpisodeList({name,duration,description}:EpisodeProps) {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <img className={style.imagem} src={placeHolder} alt="" />
        <div className={style.text}>
          <div className={style.title_area}>
            <h3>{name}</h3>
            <h6 className={style.dur}>{duration}</h6>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default EpisodeList;
