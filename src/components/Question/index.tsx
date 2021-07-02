import React from "react";
import cx from "classnames";

import User from "components/User";

import * as S from "./styles";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: React.ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

const Question = (props: QuestionProps) => {
  return (
    <S.Question
      className={cx(
        { answered: props.isAnswered },
        { highlighted: props.isHighlighted && !props.isAnswered }
      )}
      {...(props.isHighlighted && { "aria-label": "Pergunta em destaque" })}
      {...(props.isAnswered && { "aria-label": "Pergunta respondida" })}
    >
      <p className="content">{props.content}</p>
      <S.QuestionFooter>
        <User name={props.author.name} avatar={props.author.avatar} />
        <S.QuestionInteractionButtons>
          {props.children}
        </S.QuestionInteractionButtons>
      </S.QuestionFooter>
    </S.Question>
  );
};

export default Question;
