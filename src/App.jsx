import { Suspense, lazy } from "react";

const AnimalList = lazy(() => import("./components/AnimalList"));
const Header = lazy(() => import("./components/Header"));

import "./App.css";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <main>
          <section>
            <AnimalList />
          </section>
        </main>
      </Suspense>
      <footer>
        <p>Zoo</p>
      </footer>
    </div>
  );
}

export default App;
