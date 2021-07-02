import { useState } from "react";
import { database } from "services/firebase";
import { useAuth } from "hooks/useAuth";
import { Link, useHistory } from "react-router-dom";

import Button from "components/Button";
import TextField from "components/TextField";
import Auth from "components/Auth";

const NewRoom = () => {
  const { user } = useAuth();
  const history = useHistory();
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

    history.push(`rooms/${firebaseRoom.key}`);
  }

  return (
    <Auth>
      <h2>Criar uma nova sala</h2>

      <form onSubmit={handleCreateRoom}>
        <TextField
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
    </Auth>
  );
};

export default NewRoom;
