import { ChangeEvent, useEffect, useState } from "react";

import { getAuthors } from "../../shared/api/authors";
import styles from "./filters.module.scss";
import { Author } from "../../types/author.types";
import {
  setPriceRange,
  setSelectedAuthor,
} from "../../entites/redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../entites/redux/store";

const Filters: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { priceRange, selectedAuthor } = useSelector(
    (state: RootState) => state.filter
  );
  const [authors, setAuthors] = useState<Author[]>([]);

  const handlePriceFromChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPriceRange({ ...priceRange, from: event.target.value }));
  };

  const handlePriceToChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPriceRange({ ...priceRange, to: event.target.value }));
  };

  const resetFields = () => {
    dispatch(setPriceRange({ from: "", to: "" }));
  };

  const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const authorName = event.target.value;
    if (selectedAuthor === authorName) {
      dispatch(setSelectedAuthor(""));
    } else {
      dispatch(setSelectedAuthor(authorName));
    }
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
            <input
              type="checkbox"
              value={author.name}
              checked={selectedAuthor === author.name}
              onChange={handleAuthorChange}
            />
            <span>{author.name}</span>
            <hr />
          </label>
        ))}
      </div>
    </div>
  );
};
export default Filters;
