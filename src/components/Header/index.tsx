import { Link } from "react-router-dom";

import RoomCode from "components/RoomCode";
import Button from "components/Button";
import Logo from "components/Logo";

import * as S from "./styles";

type HeaderProps = {
  onEndRoom?: () => void | Promise<void>;
  onSignOut: () => void | Promise<void>;
  roomId: string;
  isAdmin?: boolean;
  isLoggedIn: boolean;
};

const Header = (props: HeaderProps) => {
  return (
    <S.Header>
      <S.HeaderContent>
        <Link to="/" aria-label="Ir para a página inicial">
          <Logo />
        </Link>

        <S.HeaderNavigation>
          <RoomCode code={props.roomId} />
          {props.isAdmin && props.isLoggedIn && (
            <Button isOutlined onClick={props.onEndRoom}>
              Encerrar sala
            </Button>
          )}
          {props.isLoggedIn && (
            <Button
              bgColor="danger"
              aria-label="Sair da plataforma"
              className="sign-out"
              onClick={props.onSignOut}
            >
              Sair
            </Button>
          )}
        </S.HeaderNavigation>
      </S.HeaderContent>
    </S.Header>
  );
};

export default Header;
