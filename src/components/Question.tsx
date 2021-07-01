import React from "react";
import cx from "classnames";

import "styles/question.scss";

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
    <div
      className={cx(
        "question",
        { answered: props.isAnswered },
        { highlighted: props.isHighlighted && !props.isAnswered }
      )}
      {...(props.isHighlighted && { "aria-label": "Pergunta em destaque" })}
      {...(props.isAnswered && { "aria-label": "Pergunta respondida" })}
    >
      <p className="content">{props.content}</p>
      <footer>
        <div className="user-info">
          <img src={props.author.avatar} alt={props.author.name} />
          <span>{props.author.name}</span>
        </div>
        <div>{props.children}</div>
      </footer>
    </div>
  );
};

export default Question;
