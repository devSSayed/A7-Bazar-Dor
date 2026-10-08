import Banner from "@/Components/Banner/Banner";
import MoneyDecreasedCards from "@/Components/HomePageCard/MoneyDecreasedCards";
import MoneyRaisedCards from "@/Components/HomePageCard/MoneyRaisedCards";


export default function Home() {
  return (
   <div>
    <Banner />

    <MoneyRaisedCards />
    <MoneyDecreasedCards  />
   </div>
  );
}
