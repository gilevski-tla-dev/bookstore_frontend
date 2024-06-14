import { useEffect, useState } from "react";
import styles from "./filters.module.scss";
import axios from "axios";

const Filters = () => {
  type Author = {
    id: string;
    name: string;
  };

  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    axios
      .get("https://665730a89f970b3b36c84dc4.mockapi.io/authors")
      .then((response) => setAuthors(response.data))
      .catch((error) => console.error("Ошибка", error));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.price_block}>
        <h1>Цена:</h1>
        <div>
          <h2>От:</h2>
          <input type="text" />
        </div>
        <div>
          <h2>До:</h2>
          <input type="text" />
        </div>
        <div className={styles.authors_block}>
          <h1>Авторы:</h1>
          {authors.map((authors) => (
            <label key={authors.id}>
              <input type="checkbox" />
              <span>{authors.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
