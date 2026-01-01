export interface ProductCardProps {
  id: string;
  img: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  categories: string[];
  rating: number;
}