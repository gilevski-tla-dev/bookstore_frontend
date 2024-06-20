import { useEffect, useState } from "react";
import styles from "./filters.module.scss";
import { Author } from "../../types/author.types";
import { getAuthors } from "../../shared/api/authors";

const Filters = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      const authorData = await getAuthors();
      setAuthors(authorData);
    };
    fetchAuthors();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Фильтры</h1>
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
          {authors.map((author) => (
            <label key={author.id}>
              <input type="checkbox" />
              <span>{author.name}</span>
              <hr />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
