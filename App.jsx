import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./src/pages/Main-Page/Main-Page";
import { CardSelectionPage } from "./src/pages/Card-Selection-Page/Card-Selection-Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/card-selection" element={<CardSelectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
