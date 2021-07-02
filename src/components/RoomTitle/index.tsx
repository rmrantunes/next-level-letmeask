import * as S from "./styles";

type RoomTitleProps = {
  title: string;
  questionQuantity: number;
};

const RoomTitle = (props: RoomTitleProps) => {
  return (
    <S.Wrapper>
      <S.Title>Sala: {props.title}</S.Title>

      {props.questionQuantity !== 0 && (
        <S.QuestionQuantity>
          {props.questionQuantity}{" "}
          {props.questionQuantity > 1 ? "perguntas" : "pergunta"}
        </S.QuestionQuantity>
      )}
    </S.Wrapper>
  );
};

export default RoomTitle;
