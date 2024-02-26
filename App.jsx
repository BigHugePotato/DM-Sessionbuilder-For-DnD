import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./src/pages/Main-Page/Main-Page";
import { LibraryPage } from "./src/pages/Library/Library-Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/card-selection" element={<LibraryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
