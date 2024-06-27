import BookList from "../../features/Booklist";
import Filters from "../../features/Filters";
import Header from "../../features/Header";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Filters />
        <BookList />
      </div>
    </div>
  );
};

export default Home;
