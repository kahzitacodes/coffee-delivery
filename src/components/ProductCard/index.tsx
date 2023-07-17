import { ProductContainer, ProductContent, ProductFooter, ProductImage, ProductTag, ProductWrapTags } from './styles';
import { AddToCartButton } from '../CartButton';
import { NumericStepper } from '../NumericStepper';
import { IProductProps } from './types';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { formatCurrency } from '../../utils/format_currency';
import toast from 'react-hot-toast';

export function ProductCard({ coffee }: IProductProps) {

  const { image, price, tags, title, description } = coffee;

  const { addItemstoCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  function handleAddtoCart() {
    addItemstoCart({
      product: coffee,
      quantity: quantity,
    });
    toast.success('Produto adicionado ao carrinho');

    setQuantity(1);
  }

  function handleAdd() {
    setQuantity((prev: number) => prev + 1);
  }

  function handleSub() {
    if (quantity !== 1) {
      setQuantity((prev: number) => prev - 1);
    }
  }

  return (
    <ProductContainer>
      <ProductImage>
        <img src={image} alt={title} />
      </ProductImage>
      <ProductContent>

        <ProductWrapTags>
          {tags.map((tag) => <ProductTag key={tag}><span>{tag}</span></ProductTag>)}
        </ProductWrapTags>

        <h4>{title}</h4>
        <p>{description}</p>
      </ProductContent>
      <ProductFooter>
        <div className="price"><small>R$</small><h3>{formatCurrency(price)}</h3></div>
        <div className="actions">
          <NumericStepper value={quantity} handleAdd={handleAdd} handleSub={handleSub} />
          <AddToCartButton onClick={handleAddtoCart} />
        </div>
      </ProductFooter>
    </ProductContainer>
  );
}