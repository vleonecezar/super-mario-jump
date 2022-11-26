import { GlobalStyle } from "./styles/GlobalStyles";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Main from "./components/main";

function App() {
  return (
    <>
      <GlobalStyle />
          <Main>
            <Router>
              <Routes />
            </Router>
          </Main>

    </>
  );
}

export default App;
