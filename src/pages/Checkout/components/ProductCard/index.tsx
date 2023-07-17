import { Trash } from 'phosphor-react';
import { NumericStepper } from '../../../../components/NumericStepper';
import { ProductContainer, ProductContent, ProductImage } from './style';
import { Button } from '../../../../components/Button';
import { CartItem } from '../../../../reducers/cart/reducer';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../../context/CartContext';
import { formatCurrency } from '../../../../utils/format_currency';

export function ProductCard({ product, quantity }: CartItem) {

  const { image, price, title } = product;
  const { removeItemFromCart, updateCartItem } = useContext(CartContext);
  const [quantityValue, setQuantityValue] = useState(quantity);

  function remove() {
    removeItemFromCart(product.id);
  }

  function handleAdd() {
    setQuantityValue((prev) => prev + 1);
  }

  function handleSub() {
    if (quantityValue > 0) {
      setQuantityValue((prev) => prev - 1);
    }

  }

  useEffect(() => {
    updateCartItem(product.id, quantityValue);
    if (quantityValue === 0) {
      removeItemFromCart(product.id);
    }
  }, [quantityValue]);

  return (
    <ProductContainer>
      <ProductImage>
        <img src={image} alt={title} />
      </ProductImage>

      <ProductContent>
        <div className="content">
          <p>{title}</p>
          <span className="price">{formatCurrency(price, "R$")}</span>
        </div>
        <div className="actions">
          <NumericStepper size="sm" value={quantity} handleAdd={() => handleAdd()} handleSub={() => handleSub()} />
          <Button
            size="sm"
            variant="base"
            icon={<Trash />}
            label="Remove"
            onClick={remove}
          />
        </div>
      </ProductContent>

    </ProductContainer>
  );
}