import style from "../Display-Cards/Monster-Card.module.css";

export const CardImage = ({ imgSrc, altText }) =>
  imgSrc ? (
    <img src={imgSrc} alt={altText || "Image"} className={style.monsterImage} />
  ) : null;
