export type Book = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  author: {
    id: string;
    name: string;
  };
};
