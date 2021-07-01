import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

import illustrationImg from "assets/illustration.svg";
import logoImg from "assets/logo.svg";
import googleIconImg from "assets/google-icon.svg";

import "styles/auth.scss";
import Button from "components/Button";
import { useState } from "react";
import { database } from "services/firebase";

const Home = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) await signInWithGoogle();
    history.push("/rooms/new");
  }

  async function handleJoinRoom(event: React.FormEvent) {
    event.preventDefault();

    if (!roomCode.trim()) return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exist");
      return;
    }

    const room = roomRef.val();

    if (room.endedAt) {
      alert("Room already closed");
      return;
    }

    if (user?.id === room.authorId) {
      history.push(`/admin/rooms/${roomCode}`);
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&A</strong>
        <p>Tire as dúvidas em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o google
          </button>

          <div className="separator">Ou entre em uma sala</div>

          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={(event) => setRoomCode(event.target.value)}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
