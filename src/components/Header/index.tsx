import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles["header"]}>
      <button onClick={() => navigate("/")}>
        <h1 className={styles["title"]}>☕️ Aaker's component gallery</h1>
      </button>
    </header>
  );
}
