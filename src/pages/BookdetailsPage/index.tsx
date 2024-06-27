import Bookdetails from "../../features/Bookdetails";
import Header from "../../features/Header";
import styles from "./bookdetailspage.module.scss";

const BookdetailsPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Bookdetails />
      </div>
    </div>
  );
};

export default BookdetailsPage;
