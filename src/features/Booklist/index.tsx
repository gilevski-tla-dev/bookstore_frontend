import { useState, useEffect } from "react";
import styles from "./booklist.module.scss";
import axios from "axios";
import { Book } from "../../types/book.types";
import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books/")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Ошибка при получении книг:", error));
  }, []);

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
