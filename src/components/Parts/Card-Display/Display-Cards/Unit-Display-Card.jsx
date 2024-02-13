import style from "./Display-Card.module.css"

export const UnitDisplayCard = ({ monster }) => {

  const {
    name,
    ac,
    hp,
    resistances,
    reactions,
    legendaryActions,
    savingThrows,
    imgSrc,
  } = monster;

  
  const topTexts = [`AC: ${ac}`, `HP: ${hp}`];
const bottomTexts = [
  `Resistances: ${resistances ? resistances.join(", ") : "None"}`,
  ...(reactions ? [`Reactions: ${Object.keys(reactions).join(", ")}`] : []),
  ...(legendaryActions
    ? [`Legendary Actions: ${Object.keys(legendaryActions).join(", ")}`]
    : []),
  `Saving Throws: ${
    savingThrows
      ? Object.entries(savingThrows)
          .map(([key, value]) => `${key}: ${value}`)
          .join(", ")
      : "None"
  }`,
];


  return (
    <div className={style.card}>
      <h2 className={style.name}>{name}</h2>
      <div className={style.topSection}>
        <img src={imgSrc} alt={name} className={style.cardImage} />{" "}
        <div className={style.textbox}>
          {topTexts.map((text, index) => (
            <div key={index} className={style.text}>
              {text}
            </div>
          ))}
        </div>
      </div>
      <div className={style.bottomSection}>
        {bottomTexts.map((text, index) => (
          <div key={index} className={style.text}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

