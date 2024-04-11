import { Suspense, lazy } from "react";

const AnimalList = lazy(() => import("./components/AnimalList"));
const Header = lazy(() => import("./components/Header"));

import "./App.css";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <main>
          <Box component={"section"} sx={{maxWidth: '1200px', margin: '0 auto'}}>
            <AnimalList />
          </Box>
        </main>
      </Suspense>
      <footer>
        <p>Zoo</p>
      </footer>
    </div>
  );
}

export default App;
