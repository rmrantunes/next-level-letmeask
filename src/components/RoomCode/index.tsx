import copyImg from "assets/copy.svg";

import * as S from "./styles";

type RoomCodeProps = {
  code: string;
};

const RoomCode = (props: RoomCodeProps) => {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <S.Wrapper
      onClick={copyRoomCodeToClipboard}
      className="room-code"
      aria-label="Copiar link da sala"
      title="Copiar link da sala"
    >
      <div>
        <img src={copyImg} alt="Ícone de copiar" />
      </div>
      <span>Sala: {props.code}</span>
    </S.Wrapper>
  );
};

export default RoomCode;
