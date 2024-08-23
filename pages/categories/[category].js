import { useRouter } from "next/router";
import { carsData } from "@/data/carsData";
import Card from "@/components/module/Card";
import styles from "./Categories.module.css";
import Back from "@/components/icons/Back";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const filteredCars = carsData.filter((car) => car.category === category);

  if (filteredCars.length === 0) {
    return (
      <div onClick={() => router.back()}>
        <Back />
        <p>Back</p>
        No cars found for this category.
      </div>
    );
  }

  if (!filteredCars) {
    return (
      <div onClick={() => router.back()}>
        <Back />
        <p>Back</p>
        Loading...
      </div>
    );
  }

  return (
    <div className={styles.container} onClick={() => router.back()}>
      <Back className={styles.back} />
      <p>Back</p>
      <h1>{category} Cars</h1>
      {filteredCars.map((car) => (
        <div className={styles.card}>
          <Card key={car.id} {...car} />
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
