import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { useRoom } from "hooks/useRoom";
import { database } from "services/firebase";

import Button from "components/Button";
import Question from "components/Question";
import Header from "components/Header";
import RoomTitle from "components/RoomTitle";
import User from "components/User";
import TextField from "components/TextField";
import Container from "components/Container";

import * as S from "components/Room";

import { QuestionList } from "components/Question/styles";

type RoomParams = { id: string };

const Room = () => {
  const { user, signOut, signInWithGoogle } = useAuth();
  const params = useParams<RoomParams>();
  const history = useHistory();
  const roomId = params.id;
  const { questions, title, isAdmin } = useRoom(roomId);
  const [newQuestion, setNewQuestion] = useState("");

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

  async function handleLikeQuestion(questionId: string, likeId?: string) {
    if (likeId) {
      await database
        .ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
        .remove();
      return;
    }

    await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
      authorId: user?.id,
    });
  }

  function handleSignOut() {
    signOut();
    window.location.reload();
  }

  function handleGoToAdminRoom() {
    history.push(`/admin/rooms/${roomId}`);
  }

  return (
    <div id="page-room">
      <Header
        roomId={roomId}
        isLoggedIn={Boolean(user)}
        onSignOut={handleSignOut}
      />

      <Container>
        <RoomTitle title={title} questionQuantity={questions.length} />

        <form onSubmit={handleSendNewQuestion}>
          <TextField
            as="textarea"
            placeholder={
              isAdmin
                ? "Voc?? ?? o admistrador da sala!"
                : "O que voc?? quer perguntar?"
            }
            disabled={isAdmin}
            value={newQuestion}
            onChange={(event) => setNewQuestion(event.target.value)}
          />

          <S.FormFooter>
            {user ? (
              <User avatar={user.avatar} name={user.name} />
            ) : (
              <span>
                Para enviar uma pergunta,{" "}
                <button onClick={signInWithGoogle}>fa??a seu login</button>
              </span>
            )}
            {isAdmin ? (
              <Button onClick={handleGoToAdminRoom}>
                Ir para vis??o do Administrador
              </Button>
            ) : (
              <Button type="submit" disabled={!user}>
                Enviar pergunta
              </Button>
            )}
          </S.FormFooter>
        </form>

        <QuestionList>
          {questions.map((question) => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
              isAnswered={question.isAnswered}
              isHighlighted={question.isHighlighted}
            >
              {!question.isAnswered && (
                <button
                  className={`like-button ${question.likeId ? "liked" : ""}`}
                  type="button"
                  aria-label={` ${
                    question.likeId ? "Desmarcar" : "Marcar"
                  } como gostei | ${question.likeCount} pessoas gostaram`}
                  title={` ${
                    question.likeId ? "Desmarcar" : "Marcar"
                  } como gostei | ${question.likeCount} pessoas gostaram`}
                  onClick={() => {
                    if (!Boolean(user)) {
                      signInWithGoogle();
                      return;
                    }
                    handleLikeQuestion(question.id, question.likeId);
                  }}
                >
                  {question.likeCount > 0 && <span>{question.likeCount}</span>}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
                      stroke="#737380"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </Question>
          ))}
        </QuestionList>
      </Container>
    </div>
  );
};

export default Room;
