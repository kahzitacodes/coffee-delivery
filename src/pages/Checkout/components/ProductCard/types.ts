import { CartItem } from '../../../../reducers/cart/reducer';

export interface ProductProps {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  onRemove?: (data: CartItem) => void;

  handleSub: () => void;
  handleAdd: () => void;
}
