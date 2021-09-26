import { Header } from "./components/header";
import GlobalStyle from "./styles/global";
import { Dashboard } from "./pages/dashboard";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
