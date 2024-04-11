import "./App.css";
import AnimalList from "./components/AnimalList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <section>
          <AnimalList/>
        </section>
      </main>
      <footer>
        <p>Zoo</p>
      </footer>
    </div>
  );
}

export default App;
