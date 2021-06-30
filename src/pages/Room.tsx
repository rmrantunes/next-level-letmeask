import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

import Button from "components/Button";
import RoomCode from "./RoomCode";
import logoImg from "assets/logo.svg";

import "styles/room.scss";
import { database } from "services/firebase";

type RoomParams = { id: string };

const Room = () => {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState("");

  const roomId = params.id;

  async function handleSendNewQuestion(event: React.FormEvent) {
    event.preventDefault();
    if (!newQuestion.trim()) return;
    if (!user) throw new Error("You must be logged in");

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);
    setNewQuestion("");
  }

  return (
    <div id="page-room">
      <header>
        <div className="header-content">
          <img src={logoImg} alt="Letmeask" />

          <RoomCode code={roomId} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>todo: room title</h1>
          <span>todo: question amount</span>
        </div>

        <form onSubmit={handleSendNewQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            value={newQuestion}
            onChange={(event) => setNewQuestion(event.target.value)}
          />

          <div className="form-footer">
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma pergunta, <button>faça seu login</button>
              </span>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Room;
