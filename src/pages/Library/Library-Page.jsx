import { Header } from "../../layouts/Header/Header";
import { SideBar } from "../../components/Sidebar/Sidebar";
import { SelectedCardContainer } from "../../components/Card-Display/Selected-Card-Container";

export function LibraryPage() {
  return (
    <div>
      <Header />
      <main>
        <SideBar />
        <SelectedCardContainer></SelectedCardContainer>
      </main>
    </div>
  );
}
