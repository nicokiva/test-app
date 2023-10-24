import { Content, Header } from "./components";
import { PersonProvider } from "./context/personContext";
import { MainForm } from "./pages";

const App = () => (
  <>
    <Header />
    <Content>
      <PersonProvider>
        <MainForm />
      </PersonProvider>
    </Content>
  </>
);

export default App;
