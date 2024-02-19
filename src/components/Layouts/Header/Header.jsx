import style from "./header.module.css";
import { Link } from "react-router-dom";
import { SiDragonframe } from "react-icons/si";


export function Header() {
  return (
    <header className={style.header}>
      <SiDragonframe className="Logo"/>
      <h1>This is the header</h1>
      <Link to="/card-selection">
        <button type="button">Resources</button>
      </Link>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
    </header>
  );
}
