import React from "react";
import { useParams } from "react-router-dom";
import { useRoom } from "hooks/useRoom";

import Button from "components/Button";
import RoomCode from "components/RoomCode";
import Question from "components/Question";
import logoImg from "assets/logo.svg";

import "styles/room.scss";

type AdminRoomParams = { id: string };

const AdminRoom = () => {
  const params = useParams<AdminRoomParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  return (
    <div id="page-room">
      <header>
        <div className="header-content">
          <img src={logoImg} alt="Letmeask" />

          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar sala</Button>
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
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminRoom;
