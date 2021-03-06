import { useHistory, useParams } from "react-router-dom";
import { useRoom } from "hooks/useRoom";
import { useAuth } from "hooks/useAuth";

import { database } from "services/firebase";

import Question from "components/Question";
import Header from "components/Header";
import RoomTitle from "components/RoomTitle";
import Container from "components/Container";

import deleteImg from "assets/delete.svg";
import checkImg from "assets/check.svg";
import answerImg from "assets/answer.svg";

import { QuestionList } from "components/Question/styles";

// import "styles/room.scss";

type AdminRoomParams = { id: string };

const AdminRoom = () => {
  const params = useParams<AdminRoomParams>();
  const roomId = params.id;
  const { signOut, user } = useAuth();
  const { questions, title, isAdmin } = useRoom(roomId);
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

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  function handleSignOut() {
    signOut();
    history.push("/");
    window.location.reload();
  }

  return (
    <div id="page-room">
      <Header
        roomId={roomId}
        onEndRoom={handleEndRoom}
        onSignOut={handleSignOut}
        isAdmin={isAdmin}
        isLoggedIn={Boolean(user)}
      />

      <Container>
        <RoomTitle title={title} questionQuantity={questions.length} />

        <QuestionList>
          {!questions.length && (
            <p>???? - Hmm. Zero perguntas. Logo algu??m se expressa.</p>
          )}
          {questions.map((question) => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
              isAnswered={question.isAnswered}
              isHighlighted={question.isHighlighted}
            >
              {isAdmin && (
                <>
                  {!question.isAnswered && (
                    <>
                      <button
                        aria-label="Marcar pergunta como respondida"
                        title="Marcar pergunta como respondida"
                        onClick={() =>
                          handleCheckQuestionAsAnswered(question.id)
                        }
                      >
                        <img src={checkImg} alt="??cone de check" />
                      </button>
                      <button
                        aria-label="Dar destaque ?? pergunta"
                        title="Dar destaque ?? pergunta"
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <img src={answerImg} alt="??cone de bal??o de texto" />
                      </button>
                    </>
                  )}
                  <button
                    aria-label="Remover pergunta"
                    title="Remover pergunta"
                    onClick={() => handleRemoveQuestion(question.id)}
                  >
                    <img src={deleteImg} alt="??cone de lixeira" />
                  </button>
                </>
              )}
            </Question>
          ))}
        </QuestionList>
      </Container>
    </div>
  );
};

export default AdminRoom;
