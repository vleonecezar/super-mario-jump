import { GlobalStyle } from "./styles/GlobalStyles";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />

          <Router>
            <Routes />
          </Router>

    </>
  );
}

export default App;
