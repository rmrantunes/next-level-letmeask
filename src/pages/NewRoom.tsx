import { Link } from "react-router-dom";
import Button from "components/Button";

import logoImg from "assets/logo.svg";
import illustrationImg from "assets/illustration.svg";
import "styles/auth.scss";

const NewRoom = () => {
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

          <form action="">
            <input type="text" placeholder="Nome da sala" />
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
