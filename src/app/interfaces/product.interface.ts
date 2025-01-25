export interface Productstore {
  pid: string;
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  company: string;
  description: string;
  category: string;
  shipping: boolean;
  featured?: boolean;
  checked: boolean;
}
