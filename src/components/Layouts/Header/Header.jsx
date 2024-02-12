import style from "./header.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <img src="icon" alt="Icon here"/>
      <h1>This is the header</h1>
      <button type="button">Resourses</button>
    </header>
  );
}
