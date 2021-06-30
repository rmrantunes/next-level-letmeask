import { useParams } from "react-router-dom";
import Button from "components/Button";
import RoomCode from "./RoomCode";
import logoImg from "assets/logo.svg";

import "styles/room.scss";

type RoomParams = { id: string };

const Room = () => {
  const params = useParams<RoomParams>();

  return (
    <div id="page-room">
      <header>
        <div className="header-content">
          <img src={logoImg} alt="Letmeask" />

          <RoomCode code={params.id} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>todo: room title</h1>
          <span>todo: question amount</span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar?" />

          <div className="form-footer">
            <span>
              Para enviar uma pergunta, <button>faça seu login</button>
            </span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Room;
