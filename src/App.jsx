import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { CardContainer } from "./components/Main/Card-Display/Card-Container";
import { SideBar } from "./components//Main/Sidebar/Sidebar";
import { InitiativeBar } from "./components/Main/Initiative-Bar/Initiative-Bar";
import { DisplayCard } from "./components/Display-Cards/Display-Card";
import { CardSelectionPage } from "./pages/Card-Selection-Page";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={
            <main style={{ display: "flex", justifyContent: "center" }}>
              <SideBar />
              <CardContainer>
                <DisplayCard />
              </CardContainer>
              <InitiativeBar />
            </main>
          } />
          <Route path="/CardSelection" element={<CardSelectionPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
