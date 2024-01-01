import Icon from "../icon/icon";
import styles from "./footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={styles.footer}>
        <ul>
          <li>
            <a href="https://github.com/aleixsanfe" target="_blank">
              <Icon name="github" size="large" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/aleix_sanfe" target="_blank">
              <Icon name="twitter" size="large" />
            </a>
          </li>
          <li>&copy; {currentYear}</li>
        </ul>
      </footer>
    </>
  );
}
