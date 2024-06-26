import { useEffect, useState } from "react";
import styles from "./bookdetails.module.scss";
import { Book } from "../../types/book.types";
import { useParams } from "react-router-dom";
import { getBook } from "../../shared/api/books";

const Bookdetails = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // новое состояние загрузки

  useEffect(() => {
    const fetchBook = async () => {
      setIsLoading(true); // начало загрузки
      if (id) {
        const bookData = await getBook(id);
        setBook(bookData);
      }
      setIsLoading(false); // конец загрузки
    };
    fetchBook();
  }, [id]);

  if (isLoading) return <div>Загрузка...</div>; // отображение состояния загрузки
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
