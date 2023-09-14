import "./App.css";
import { Header } from "./components";
import { RouterConfig } from "./routes/RouterConfig";

function App() {
  return (
    <>
      <Header />
      <div className="p-5">
        <RouterConfig />
      </div>
    </>
  );
}

export default App;
