import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de uma átomo e React Avançado escrito ao lado."
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>TypeScript, ReactJS e Styled Components</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Imagem de um desenvolvedor de frente para uma tela de computador com código."
    />
  </S.Wrapper>
);

export default Main;
