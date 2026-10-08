import Banner from "@/Components/Banner/Banner";
import AllProductsCards from "@/Components/HomePageCard/allProductsCards";
import MoneyDecreasedCards from "@/Components/HomePageCard/MoneyDecreasedCards";
import MoneyRaisedCards from "@/Components/HomePageCard/MoneyRaisedCards";


export default function Home() {
  return (
   <div>
    <Banner />

    <MoneyRaisedCards />
    <MoneyDecreasedCards  />
    <AllProductsCards />
   </div>
  );
}
