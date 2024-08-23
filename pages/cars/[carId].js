import { useRouter } from "next/router";
import { carsData } from "@/data/carsData";
import CarDetails from "@/components/templates/CarDetails";
const CarDetail = () => {
  const router = useRouter();
  const { carId } = router.query;

  // Loading state for when carId is not yet available
  if (!carId) {
    return <div>Loading...</div>;
  }

  const CarsDetails = carsData.find((car) => car.id === parseInt(carId));

  if (!CarsDetails) {
    return <div>Car not found</div>;
  }
  return <CarDetails {...CarsDetails} />;
};

export default CarDetail;
