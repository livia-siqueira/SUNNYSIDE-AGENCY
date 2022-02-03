import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/theme";
import { Global } from "./styles/Global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
