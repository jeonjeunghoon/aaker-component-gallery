import { Container } from "react-aaker-layout-components";
import LayoutComponentPage from "../LayoutComponentPage";

export default function ContainerPage() {
  return (
    <LayoutComponentPage
      title='📦 Container 컴포넌트'
      description='다양한 스타일을 적용할 수 있는 범용적인 div 컴포넌트입니다.'
    >
      <Container width='40rem' height='40rem' backgroundColor='#e7e0da' />
    </LayoutComponentPage>
  );
}
