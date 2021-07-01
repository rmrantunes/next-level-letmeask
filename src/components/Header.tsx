import { Link } from "react-router-dom";

import RoomCode from "components/RoomCode";
import Button from "components/Button";

import logoImg from "assets/logo.svg";

import "styles/header.scss";

type HeaderProps = {
  onEndRoom?: () => void | Promise<void>;
  onSignOut: () => void | Promise<void>;
  roomId: string;
  isAdmin?: boolean;
  isLoggedIn: boolean;
};

const Header = (props: HeaderProps) => {
  return (
    <header>
      <div className="header-content">
        <Link to="/" aria-label="Ir para a página inicial">
          <img src={logoImg} alt="Letmeask" />
        </Link>

        <div>
          <RoomCode code={props.roomId} />
          {props.isAdmin && props.isLoggedIn && (
            <Button isOutlined onClick={props.onEndRoom}>
              Encerrar sala
            </Button>
          )}
          {props.isLoggedIn && (
            <button
              aria-label="Sair da plataforma"
              className="sign-out"
              onClick={props.onSignOut}
            >
              Sair
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
