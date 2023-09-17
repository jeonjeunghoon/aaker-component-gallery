import { PropsWithChildren } from "react";
import { Container, Flex } from "react-aaker-layout-components";

interface Props extends PropsWithChildren {}

export default function ComponentShowBox({ children }: Props) {
  return (
    <Container
      padding='2rem'
      border='2px solid rgba(218, 224, 231, 0.08)'
      borderRadius={8}
      backgroundColor='#2e2e2eff'
    >
      <Flex
        justify='center'
        align='center'
        padding='2rem 8rem'
        backgroundColor='#383838ff'
      >
        {children}
      </Flex>
    </Container>
  );
}
