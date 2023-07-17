import { Link } from 'react-router-dom';
import logo from '../../assets/coffe-delivery-logo.svg';
import { Container } from '../../layouts/DefaultLayout/styles';
import { CartButton } from '../CartButton';
import { BadgeCounter, CartWrapper, HeaderContainer, HeaderLocation, HeaderLogo, HeaderNav } from './styles';
import { MapPin } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';

export function Header() {

  const { order, orderItemsQuantity } = useContext(CartContext);

  const [orderAmount, setorderAmount] = useState(0);

  useEffect(() => {
    const orderCount = order.reduce((cartSum, item) => {
      return cartSum + item.quantity;
    }, 0);

    setorderAmount(orderCount);

  }, [order]);

  const isCartEmpty = orderItemsQuantity === 0;

  return (
    <Container>
      <HeaderContainer>
        <Link to="/">
          <HeaderLogo>
            <img src={logo} />
          </HeaderLogo>
        </Link>
        <HeaderNav>
          <HeaderLocation>
            <MapPin size={22} weight="fill" />
            <span>Curitiba, PR</span>
          </HeaderLocation>

          <CartWrapper>

            {isCartEmpty ? null :
              <BadgeCounter>{orderItemsQuantity}</BadgeCounter>
            }

            <Link to="/checkout">
              <CartButton />
            </Link>

          </CartWrapper>
        </HeaderNav>
      </HeaderContainer>
    </Container>
  );
}