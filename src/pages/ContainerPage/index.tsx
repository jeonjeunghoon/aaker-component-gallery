import styles from "./index.module.css";

import { Container } from "react-aaker-layout-components";
import ComponentShowBox from "../../components/ComponentShowBox";
import InfoLink from "../../components/InfoLink";

export default function ContainerPage() {
  return (
    <section className={styles["container-page"]}>
      <h2 className={styles["container-page-title"]}>📦 Container 컴포넌트</h2>
      <p>다양한 스타일을 적용할 수 있는 범용적인 div 컴포넌트입니다.</p>
      <ComponentShowBox>
        <Container width='40rem' height='40rem' backgroundColor='#e7e0da' />
      </ComponentShowBox>
      <InfoLink destination='https://github.com/jeonjeunghoon/layout-component/tree/step1' />
    </section>
  );
}
