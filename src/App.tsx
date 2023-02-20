import TopMenu from "./components/TopMenu";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <TopMenu />
      <div className="app">
        <Home />
      </div>
    </>
  );
}

export default App;
