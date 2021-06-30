import { useEffect, useState } from "react";
import { database } from "services/firebase";

type Question = {
  id: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isHighlighted: boolean;
  isAnswered: boolean;
};

type FirebaseQuestions = Record<string, Omit<Question, "id">>;

export function useRoom(roomId: string) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on("value", (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};
      const parsedQuestion = Object.entries(firebaseQuestions).map(
        ([key, value]) => ({ id: key, ...value })
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestion);
    });
  }, [roomId]);

  return { questions, title };
}
