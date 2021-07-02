import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

import * as S from "./styles";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as?: "input" | "textarea";
  };

const TextField = ({ as, ...props }: TextFieldProps) => {
  switch (as) {
    case "input":
    default:
      return <S.Input {...props} />;
    case "textarea":
      return <S.Textarea {...props} />;
  }
};

export default TextField;
