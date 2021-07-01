import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { database } from "services/firebase";
import { useAuth } from "./useAuth";

type Question = {
  id: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isHighlighted: boolean;
  isAnswered: boolean;
  likeCount: number;
  likeId?: string;
};

type FirebaseQuestions = Record<
  string,
  Omit<Question, "id" | "likeCount" | "likeId"> & {
    likes: Record<string, { authorId: string }>;
  }
>;

export function useRoom(roomId: string) {
  const { user } = useAuth();
  const history = useHistory();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState("");
  const [room, setRoom] = useState<any>();
  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on("value", (room) => {
      if (!room.exists()) {
        roomRef.off();
        alert("Room does not exist");
        history.push("/");
        return;
      }

      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};
      const parsedQuestion = Object.entries(firebaseQuestions).map(
        ([key, value]) => ({
          id: key,
          ...value,
          likes: undefined,
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(
            ([, like]) => like.authorId === user?.id
          )?.[0],
        })
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestion);
      setRoom(databaseRoom);

      return () => {
        roomRef.off("value");
      };
    });
  }, [roomId, user, history]);

  return { questions, title, room };
}
