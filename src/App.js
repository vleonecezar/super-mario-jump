import { GlobalStyle } from "./styles/GlobalStyles";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Layout from "./layout";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Router>
          <Routes />
        </Router>
      </Layout>
    </>
  );
}

export default App;
