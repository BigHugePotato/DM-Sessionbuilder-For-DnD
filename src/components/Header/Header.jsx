import style from "./header.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <h1>This is the header</h1>
    </header>
  );
}


// export function Header() {
//   return (
//     <header style={{ backgroundColor: "blue" }}>
//       <h1>This is the header</h1>
//     </header>
//   );
// }