import { PropsWithChildren } from "react";

import styles from "./index.module.css";

import { Container, Flex } from "react-aaker-layout-components";
import Header from "../Header";
import NavigationBar from "../NavigationBar";

interface Props extends PropsWithChildren {}

export default function Layout({ children }: Props) {
  return (
    <Container width='100vw' height='100vh'>
      <Header />
      <Flex height='calc(100vh - 6rem)'>
        <NavigationBar />
        <main className={styles["main-contents"]}>{children}</main>
      </Flex>
    </Container>
  );
}
