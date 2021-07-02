import Icon from "components/Icon";
import { useThemeMode } from "hooks/useThemeMode";

import * as S from "./styles";

const ToggleTheme = () => {
  const { toggleTheme, mode } = useThemeMode();

  return (
    <S.Wrapper onClick={toggleTheme}>
      <Icon variant={mode === "dark" ? "Sun" : "Moon"} />
    </S.Wrapper>
  );
};

export default ToggleTheme;
