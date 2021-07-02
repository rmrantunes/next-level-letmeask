import Icon from "components/Icon";
import { useThemeMode } from "hooks/useThemeMode";

import * as S from "./styles";

const ToggleTheme = () => {
  const { toggleTheme, mode } = useThemeMode();

  const label =
    mode === "light" ? "Mudar para tema escuro" : "Mudar para tema claro";

  return (
    <S.Wrapper onClick={toggleTheme} title={label} aria-label={label}>
      <Icon variant={mode === "dark" ? "Sun" : "Moon"} />
    </S.Wrapper>
  );
};

export default ToggleTheme;
