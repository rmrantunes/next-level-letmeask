import copyImg from "assets/copy.svg";

import "styles/room-code.scss";

type RoomCodeProps = {
  code: string;
};

const RoomCode = (props: RoomCodeProps) => {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button
      onClick={copyRoomCodeToClipboard}
      className="room-code"
      aria-label="Copiar link da sala"
      title="Copiar link da sala"
    >
      <div>
        <img src={copyImg} alt="Ícone de copiar" />
      </div>
      <span>Sala: {props.code}</span>
    </button>
  );
};

export default RoomCode;
