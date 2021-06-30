import { useHistory, useParams } from "react-router-dom";
import { useRoom } from "hooks/useRoom";

import { database } from "services/firebase";

import Button from "components/Button";
import RoomCode from "components/RoomCode";
import Question from "components/Question";

import logoImg from "assets/logo.svg";
import deleteImg from "assets/delete.svg";

import "styles/room.scss";

type AdminRoomParams = { id: string };

const AdminRoom = () => {
  const params = useParams<AdminRoomParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  const history = useHistory();

  async function handleRemoveQuestion(questionId: string) {
    const proceedRemoving = window.confirm("Deseja mesmo remover a pergunta?");
    if (!proceedRemoving) return;

    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push("/");
  }

  return (
    <div id="page-room">
      <header>
        <div className="header-content">
          <img src={logoImg} alt="Letmeask" />

          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala: {title}</h1>

          {questions.length !== 0 && (
            <span>
              {questions.length}{" "}
              {questions.length > 1 ? "perguntas" : "pergunta"}
            </span>
          )}
        </div>

        <div className="question-list">
          {questions.map((question) => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
            >
              <button
                aria-label="Remover pergunta"
                onClick={() => handleRemoveQuestion(question.id)}
              >
                <img src={deleteImg} alt="Ícone de lixeira" />
              </button>
            </Question>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminRoom;
