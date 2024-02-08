import { Header } from "./components/Header/Header";
import { CardContainer } from "./components/Main/Card-Display/Card-Container";
// import { SideBar } from "./components//Main/Sidebar/Sidebar";
// import { InitiativeBar } from "./components/Main/Initiative-Bar/Initiative-Bar";

function App() {
  return (
    <div>
      <Header>
      </Header>
      <main style={{display : "flex", justifyContent : "center"}}>
        {/* <SideBar></SideBar> */}
        <CardContainer></CardContainer>
        {/* <InitiativeBar></InitiativeBar> */}
      </main>
    </div>
  );
}

export default App;
