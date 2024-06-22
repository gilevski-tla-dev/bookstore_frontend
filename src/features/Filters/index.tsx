import { useEffect, useState } from "react";

import { useFilter } from "../../entites/useFilter";
import { getAuthors } from "../../shared/api/authors";
import styles from "./filters.module.scss";
import { Author } from "../../types/author.types";

const Filters: React.FC = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  const { priceRange, setPriceRange } = useFilter();

  const handlePriceFromChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPriceRange({ ...priceRange, from: event.target.value });
  };

  const handlePriceToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange({ ...priceRange, to: event.target.value });
  };

  const resetFields = () => {
    setPriceRange({ from: "", to: "" });
  };

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
          <input
            type="text"
            value={priceRange.from}
            onChange={handlePriceFromChange}
          />
        </div>
        <div>
          <h2>До:</h2>
          <input
            type="text"
            value={priceRange.to}
            onChange={handlePriceToChange}
          />
        </div>
        <button onClick={resetFields}>Сбросить</button>
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
  );
};
export default Filters;
