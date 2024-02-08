import { Header } from "./components/Header/Header";
import { CardContainer } from "./components/Header/Main/Card-Display/Card-Container";
import { SideBar } from "./components/Header/Main/Sidebar/Sidebar";
import { InitiativeBar } from "./components/Header/Main/Initiative-Bar/Initiative-Bar";

function App() {
  return (
    <div>
      <Header/>
      <main>
        <SideBar></SideBar>
        <CardContainer></CardContainer>
        <InitiativeBar></InitiativeBar>
      </main>
    </div>
  );
}

export default App;
