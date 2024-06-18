import { useEffect, useState } from "react";
import styles from "./bookdetails.module.scss";
import axios from "axios";
import { Book } from "../../types/book.types";
import { useParams } from "react-router-dom";

const Bookdetails = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    axios
      .get<Book>(`http://localhost:3000/books/${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error("Ошибка при получении книги:", error));
  }, [id]);

  if (!book) return null;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={book.image} alt={book.title} />
      </div>
      <div className={styles.info}>
        <h1>{book.title}</h1>
        <h2>{book.description}</h2>
        <h3>Автор: {book.author.name}</h3>
      </div>
      <div className={styles.price}>
        <h3>{book.price} руб</h3>
        <button>В корзину</button>
      </div>
    </div>
  );
};

export default Bookdetails;
