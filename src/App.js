import { Header } from "./components/header";
import GlobalStyle from "./styles/global";
import { Dashboard } from "./pages/dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

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
