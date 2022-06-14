import Header from "./components/header";
import Main from "./components/main";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main></Main>
    </>
  );
}

export default App;
