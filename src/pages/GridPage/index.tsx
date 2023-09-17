import { Container, Grid } from "react-aaker-layout-components";
import LayoutComponentPage from "../LayoutComponentPage";

export default function GridPage() {
  return (
    <LayoutComponentPage
      title='🔲 Grid 컴포넌트'
      description='Grid 레이아웃을 쉽게 구현할 수 있는 Grid 컴포넌트입니다.'
    >
      <Grid rows={2} columns={2} gap={10} backgroundColor='inherit'>
        <Container width='20rem' height='20rem' backgroundColor='#e7e0da' />
        <Container width='20rem' height='20rem' backgroundColor='#e7e0da' />
        <Container width='20rem' height='20rem' backgroundColor='#e7e0da' />
        <Container width='20rem' height='20rem' backgroundColor='#e7e0da' />
      </Grid>
    </LayoutComponentPage>
  );
}
