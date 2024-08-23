import { carsData } from "@/data/carsData";
import { useRouter } from "next/router";
import CarsPage from "@/components/templates/CarsPage";

const FilteredCars = () => {
  const router = useRouter();

  const [min, max] = router.query.slug || [];

  const filteredData = carsData.filter(
    (car) => car.price >= min && car.price <= max
  );

  console.log(filteredData);
  if (!filteredData.length) {
    return <div>No cars found</div>;
  }
  return <CarsPage cars={filteredData} />;
};

export default FilteredCars;
