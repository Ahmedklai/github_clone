import React from "react";

import { Container, GithubLogo } from "./styles";

import { ThemeName } from "../../styles/themes";
import DayNightToggle from "react-day-and-night-toggle";

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
      <DayNightToggle onChange={toggleTheme} checked={themeName == "dark"} />
      <h4 style={{ color: "white" }}>MVST GITHUB CLONE</h4>
    </Container>
  );
};

export default Header;
