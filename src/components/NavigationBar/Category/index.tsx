import { PropsWithChildren } from "react";

import "./index.module.css";

import { Container } from "react-aaker-layout-components";

interface Props extends PropsWithChildren {
  name: string;
}

export default function Category({ name, children }: Props) {
  return (
    <Container>
      <p>{name}</p>
      <Container>{children}</Container>
    </Container>
  );
}
