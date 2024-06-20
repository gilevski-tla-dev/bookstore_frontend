import axios from "../axios";
import { Book } from "../../types/book.types";

export const getBooks = async (): Promise<Book[]> => {
  try {
    const response = await axios.get<Book[]>("/books");
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
