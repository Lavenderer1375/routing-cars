import Card from "../module/Card";
import styles from "./CarsPage.module.css";

const CarsPage = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return <div>No data available</div>;
  }
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
};

export default CarsPage;
