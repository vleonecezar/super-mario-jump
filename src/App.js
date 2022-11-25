import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/header";
import Main from "./components/main";
import Screen from "./components/screen";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Screen>
          <Router>
            <Routes />
          </Router>
        </Screen>
      </Main>
    </>
  );
}

export default App;
