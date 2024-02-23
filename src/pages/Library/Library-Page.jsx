import { Header } from "../../layouts/Header/Header";
import { CardContainer } from "../../components/Card-Display/Card-Container";
import { SideBar } from "../../components/Sidebar/Sidebar";

export function LibraryPage() {
  return (
    <div>
      <Header />
      <main>
        <SideBar />
        <CardContainer></CardContainer>
      </main>
    </div>
  );
}
