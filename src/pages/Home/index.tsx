import BookList from "../../features/Booklist";
import Filters from "../../features/Filters";
import Header from "../../features/Header";
import styles from "./home.module.scss";
import { FilterProvider } from "../../entites/useFilter";

const Home = () => {
  return (
    <FilterProvider>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <Filters />
          <BookList />
        </div>
      </div>
    </FilterProvider>
  );
};

export default Home;
