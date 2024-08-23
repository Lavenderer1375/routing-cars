import AllButton from "@/components/module/AllButton";
import Categories from "@/components/module/Categories";
import SearchBar from "@/components/module/SearchBar";
import CarsPage from "@/components/templates/CarsPage";
import { carsData } from "@/data/carsData";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const cars = carsData.slice(0, 3);
  return (
    <main>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarsPage data={cars} />
    </main>
  );
}
