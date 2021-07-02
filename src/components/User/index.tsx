import * as S from "./styles";

type UserProps = {
  avatar: string;
  name: string;
};

const User = (props: UserProps) => {
  return (
    <S.Wrapper>
      <S.Avatar src={props.avatar} alt={props.name} />
      <S.Username>{props.name}</S.Username>
    </S.Wrapper>
  );
};

export default User;
