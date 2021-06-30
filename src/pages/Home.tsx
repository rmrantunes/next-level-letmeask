import { useHistory } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

import illustrationImg from "assets/illustration.svg";
import logoImg from "assets/logo.svg";
import googleIconImg from "assets/google-icon.svg";

import "styles/auth.scss";
import Button from "components/Button";

const Home = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) await signInWithGoogle();
    history.push("/rooms/new");
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

          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
