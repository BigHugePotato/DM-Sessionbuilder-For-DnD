import style from "./Card-Container.module.css"

export function CardContainer() {
  return (
    <header className={style.cardContainer}>
      <img src="icon" alt="Icon here"/>
      <h1>This is the header</h1>
      <button type="button">Resourses</button>
    </header>
  );
}