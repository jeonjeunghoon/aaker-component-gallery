import { Container, Flex } from "react-aaker-layout-components";
import LayoutComponentPage from "../LayoutComponentPage";

export default function FlexPage() {
  return (
    <LayoutComponentPage
      title='🧲 Flex'
      description='자식 컴포넌트들을 유연하게 배열할 수 있는 컴포넌트입니다.'
    >
      <Flex gap={10} backgroundColor='inherit'>
        <Container width='20rem' height='40rem' backgroundColor='#e7e0da' />
        <Container width='20rem' height='40rem' backgroundColor='#e7e0da' />
      </Flex>
    </LayoutComponentPage>
  );
}
