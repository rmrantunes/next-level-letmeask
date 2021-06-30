import { useState } from "react";
import { database } from "services/firebase";
import { useAuth } from "hooks/useAuth";

import { Link, useHistory } from "react-router-dom";
import Button from "components/Button";

import logoImg from "assets/logo.svg";
import illustrationImg from "assets/illustration.svg";
import "styles/auth.scss";

const NewRoom = () => {
  const { user } = useAuth();
  const history = useHistory()
  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(event: React.FormEvent) {
    event.preventDefault();

    if (!newRoom.trim()) return;

    // See: Firebase reference
    const roomRef = database.ref("rooms");

    const firebaseRoom = roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`rooms/${firebaseRoom.key}`)
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
          <h2>Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Nome da sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default NewRoom;
