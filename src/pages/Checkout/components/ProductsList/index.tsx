import { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';
import { CartItem } from '../../../../reducers/cart/reducer';
import { NumericStepperProvider } from '../../../../context/NumericStepperContext';
import { ProductCard } from '../ProductCard';
import { ProductsListContainer } from './style';

export function ProductsList() {
  const { order } = useContext(CartContext);

  return (
    <ProductsListContainer>
      {order.map((item: CartItem) => {
        return (
          <NumericStepperProvider key={item.product.id}>
            <ProductCard
              product={item.product}
              quantity={item.quantity}
            />
          </NumericStepperProvider>
        );
      })}
    </ProductsListContainer>
  );
}