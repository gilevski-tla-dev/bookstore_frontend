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
import { useDebounce } from "../../shared/hooks/useDebounce";

/**
 * Filter component
 *
 */
const Filters: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedAuthor = useSelector(
    (state: RootState) => state.filter.selectedAuthor
  );
  const [authors, setAuthors] = useState<Author[]>([]);
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  const debouncedPriceFrom = useDebounce(priceFrom, 500);
  const debouncedPriceTo = useDebounce(priceTo, 500);

  useEffect(() => {
    dispatch(setPriceRange({ from: debouncedPriceFrom, to: debouncedPriceTo }));
  }, [debouncedPriceFrom, debouncedPriceTo, dispatch]);

  const handlePriceFromChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPriceFrom(event.target.value);
  };

  const handlePriceToChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPriceTo(event.target.value);
  };

  const resetFields = () => {
    setPriceFrom("");
    setPriceTo("");
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
            value={priceFrom}
            onChange={handlePriceFromChange}
          />
        </div>
        <div>
          <h2>До:</h2>
          <input type="text" value={priceTo} onChange={handlePriceToChange} />
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
