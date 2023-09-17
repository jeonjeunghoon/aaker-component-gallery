import styles from "./index.module.css";

interface Props {
  destination: string;
}

export default function InfoLink({ destination }: Props) {
  return (
    <p>
      자세한 설명은
      <a
        className={styles["info-anchor"]}
        onClick={() => window.open(destination)}
      >
        링크
      </a>
      에서 확인하세요
    </p>
  );
}
