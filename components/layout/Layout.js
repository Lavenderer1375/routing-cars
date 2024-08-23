import Link from "next/link";
import styles from "./Layout.module.css";
const layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Routing Cars</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <p>Copyright &copy; Kianoush Abedi 2024</p>
      </footer>
    </>
  );
};

export default layout;
