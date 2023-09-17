import styles from "./index.module.css";

import ComponentShowBox from "../../components/ComponentShowBox";
import InfoLink from "../../components/InfoLink";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
  description: string;
}

export default function LayoutComponentPage({
  title,
  description,
  children,
}: Props) {
  return (
    <section className={styles["layout-component-page"]}>
      <h2 className={styles["layout-component-page-title"]}>{title}</h2>
      <p>{description}</p>
      <ComponentShowBox>{children}</ComponentShowBox>
      <InfoLink destination='https://github.com/jeonjeunghoon/layout-component/tree/step1' />
    </section>
  );
}
