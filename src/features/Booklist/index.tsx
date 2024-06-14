import styles from "./booklist.module.scss";

const BookList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img
            src="https://cdn1.ozonusercontent.com/s3/club-storage/images/article_preview/981/c1200/81cff3ba-b9d5-4875-894f-0d6bf6a2a088.jpeg"
            alt=""
          />
        </div>
        <div className={styles.bottom_card}>
          <div className={styles.info}>
            <h1>Война и мир</h1>
            <h2>А. С. Пушкин</h2>
          </div>
          <div className={styles.buy_block}>
            <h2>2999 руб.</h2>
            <button>Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
