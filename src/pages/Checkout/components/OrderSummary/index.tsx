import { useContext, useEffect, useState } from 'react';
import { SummaryContainer, SummaryItems, SummaryRowContainer, SummaryTotal } from './style';
import { CartContext } from '../../../../context/CartContext';
import { formatCurrency } from '../../../../utils/format_currency';
import { OrderSummaryProps } from './types';

export function OrderSummary({ handleGetTotal, total }: OrderSummaryProps) {

  const { order } = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);
  const shipping = 3.5;

  useEffect(() => {
    const totalItemsValue = order.reduce((cartTotal, cartItem) => {
      return cartTotal + (cartItem.quantity * cartItem.product.price);
    }, 0);

    setTotalItems(totalItemsValue);
  }, [order]);

  useEffect(() => {
    const totalPlusShipping = totalItems + shipping;
    handleGetTotal(totalPlusShipping);
  }, [totalItems]);

  return (
    <SummaryContainer>
      <SummaryRowContainer>
        <SummaryItems>Total de items</SummaryItems>
        <SummaryItems>{formatCurrency(totalItems, "R$")}</SummaryItems>
      </SummaryRowContainer>

      <SummaryRowContainer>
        <SummaryItems>Entrega</SummaryItems>
        <SummaryItems>{formatCurrency(shipping, "R$")}</SummaryItems>
      </SummaryRowContainer>

      <SummaryRowContainer>
        <SummaryTotal>Total</SummaryTotal>
        <SummaryTotal>{formatCurrency(total, "R$")}</SummaryTotal>
      </SummaryRowContainer>
    </SummaryContainer>
  );
}