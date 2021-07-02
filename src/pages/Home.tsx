import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { database } from "services/firebase";


import Button from "components/Button";
import TextField from "components/TextField";
import Auth from "components/Auth";
import GoogleIcon from "components/GoogleIcon";

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
    <Auth>
      <Button bgColor="google" onClick={handleCreateRoom}>
        <GoogleIcon />
        Crie sua sala com o Google
      </Button>

      <div className="separator">Ou entre em uma sala</div>

      <form onSubmit={handleJoinRoom}>
        <TextField
          type="text"
          placeholder="Digite o código da sala"
          value={roomCode}
          onChange={(event) => setRoomCode(event.target.value)}
        />
        <Button type="submit">Entrar na sala</Button>
      </form>
    </Auth>
  );
};

export default Home;
