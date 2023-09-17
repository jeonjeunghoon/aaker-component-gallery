import { useNavigate } from "react-router-dom";

import "./index.module.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => navigate("/")}>
        <h1>☕️ Aaker's component gallery</h1>
      </button>
    </header>
  );
}
