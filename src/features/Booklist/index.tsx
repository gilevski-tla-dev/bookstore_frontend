import { useEffect } from "react";
import { getBooks } from "../../shared/api/books";
import styles from "./booklist.module.scss";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../entites/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../../entites/redux/booksSlice";

const BookList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { books } = useSelector((state: RootState) => state.books);
  const { priceRange, selectedAuthor } = useSelector(
    (state: RootState) => state.filter
  );

  useEffect(() => {
    const fetchBooks = async () => {
      const bookData = await getBooks({
        ...priceRange,
        author: selectedAuthor,
      });
      dispatch(setBooks(bookData));
    };
    fetchBooks();
  }, [dispatch, priceRange, selectedAuthor]);

  return (
    <div className={styles.container}>
      {books.map((book) => (
        <div key={book.id} className={styles.card}>
          <div className={styles.image}>
            <img src={book.image} alt={book.title} />
          </div>
          <div className={styles.bottom_card}>
            <div className={styles.info}>
              <h1>{book.title}</h1>
              <h2>{book.author.name}</h2>
            </div>
            <div className={styles.buy_block}>
              <h2>{book.price} руб.</h2>
              <Link to={`/books/${book.id}`} key={book.id}>
                <button>Купить</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
