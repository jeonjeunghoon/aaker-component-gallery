import styles from "./index.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <Link to=''>
        <h1 className={styles["title"]}>☕️ Aaker's component gallery</h1>
      </Link>
    </header>
  );
}
