import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeName, themes } from "./styles/themes";
import { ThemeProvider } from "styled-components";
import Welcome from "./pages/Welcome/index";
import ProfileProvider from "./pages/Profile/profile_apollo_provider";

function App() {
  const [themeName, setThemeName] = useState<ThemeName>("light");
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName} />
        <Routes>
          <Route path="/profile" element={<ProfileProvider />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
        <Footer />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
