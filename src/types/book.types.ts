export type Book = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  author: {
    id: string;
    name: string;
  };
};
