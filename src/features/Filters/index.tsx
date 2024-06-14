import styles from "./filters.module.scss";

const Filters = () => {
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
          <label>
            <input type="checkbox" />
            <span>Пушкин</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
