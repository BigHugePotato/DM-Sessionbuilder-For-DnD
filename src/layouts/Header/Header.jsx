import style from "./header.module.css";
import { Link } from "react-router-dom";
import { SiDragonframe } from "react-icons/si";
import BasicTextFields from "./Search-Bar/Search-Input-Field";

export function Header() {
  return (
    <header className={style.header}>
      <SiDragonframe className="Logo" />
      <h1>This is the head</h1>
      <BasicTextFields/>
      <Link to="/card-selection">
        <button type="button">Resources</button>
      </Link>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
    </header>
  );
}
