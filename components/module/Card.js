import styles from "./Card.module.css";
import Location from "../icons/Location";
import Link from "next/link";
const Card = (props) => {
  const { id, name, model, year, distance, location, image, price } = props;
  return (
    <Link href={`/cars/${id}`}>
      <div className={styles.container}>
        <img src={image} alt={name} className={styles.image} />
        <h4 className={styles.title}>{`${name} ${model}`}</h4>
        <p className={styles.detail}>{`${year} / ${distance}Km`}</p>
        <div className={styles.footer}>
          <p>$ {price}</p>
          <div className={styles.location}>
            <p>
              {location}
              <Location />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
