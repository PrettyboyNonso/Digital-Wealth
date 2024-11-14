import Home from "./homeComponents/Home";
import Header from "./reuseables/Header";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <Home />
      </main>
    </>
  );
}

export default App;
