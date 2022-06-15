import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/header";
import Main from "./components/main";
import Screen from "./components/screen";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Screen></Screen>
      </Main>
    </>
  );
}

export default App;
