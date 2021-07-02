import { ReactNode } from "react";
import illustrationImg from "assets/illustration.svg";

import Logo from "components/Logo";

import * as S from "./styles";

type AuthProps = {
  children: ReactNode;
};

const Auth = (props: AuthProps) => {
  return (
    <S.PageAuth>
      <S.Hero>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <div>
          <strong>Crie salas de Q&A</strong>
          <p>Tire as dúvidas em tempo real</p>
        </div>
      </S.Hero>
      <S.AuthFormSection>
        <S.AuthFormSectionContent>
          <Logo />
          {props.children}
        </S.AuthFormSectionContent>
      </S.AuthFormSection>
    </S.PageAuth>
  );
};

export default Auth;
