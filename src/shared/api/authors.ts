import axios from "../axios";
import { Author } from "../../types/author.types";

export const getAuthors = async (): Promise<Author[]> => {
  try {
    const response = await axios.get<Author[]>("/authors");

    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("Ошибка: полученные данные не являются массивом");
      return [];
    }
  } catch (error) {
    console.error("Ошибка при получении авторов", error);
    return [];
  }
};
