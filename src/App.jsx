import Loading from "./components/Loading";
import Tours from "./components/Tours";
import { useGlobalContext } from "./context";

function App() {
  const { tours } = useGlobalContext();
  return (
    <main>
      <h1 className="title">Tours</h1>
      {tours ? <Tours /> : <Loading />}
    </main>
  );
}

export default App;
