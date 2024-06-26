import axios from "../axios";
import { Book } from "../../types/book.types";

interface PriceRange {
  from: string;
  to: string;
}

interface GetBooksParams extends PriceRange {
  author: string;
}

export const getBooks = async (params: GetBooksParams): Promise<Book[]> => {
  try {
    const response = await axios.get<Book[]>(
      `/books?from=${params.from}&to=${params.to}&author=${params.author}`
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении книг:", error);
    return [];
  }
};

export const getBook = async (id: string): Promise<Book | null> => {
  try {
    const response = await axios.get<Book>(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении книги:", error);
    return null;
  }
};
