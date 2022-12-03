import React from "react";

import { Container, GithubLogo } from "./styles";

import { ThemeName } from "../../styles/themes";

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  function toggleTheme() {
    setThemeName(themeName === "light" ? "dark" : "light");
  }

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
      <h3 style={{ color: "white" }}>GITHUB CLONE FOR MVST CODING CHALLENGE</h3>
    </Container>
  );
};

export default Header;
