import styles from "./header.module.scss";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className="home">
            <li>
              <a href="/">Aleix Sanfe</a>
            </li>
          </ul>
          <ul className="index"></ul>
          <ul className="menu">
            <li></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
