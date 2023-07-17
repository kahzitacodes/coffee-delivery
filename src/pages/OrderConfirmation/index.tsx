import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { FeaturedIcon } from '../../components/FeaturedIcon';
import { Container } from '../../layouts/DefaultLayout/styles';
import { CardContainer, CardsWrapper, ConfirmationContainer, ConfirmationImage, OrderInfos, OrderList, TitleWrapper } from './style';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import illustration from '../../assets/Illustration.png';

export function OrderConfirmation() {

  const { orderInfos } = useContext(CartContext);

  function getPaymentMethod(type: string) {
    switch (type) {
      case 'credit-card':
        return 'Cartão de Crédito';
      case 'debit-card':
        return 'Cartão de Débito';
      case 'money':
        return 'Dinheiro';
    }
  }

  return (
    <Container>
      <ConfirmationContainer>
        <TitleWrapper>
          <h2 className="title">Uhu! Pedido confirmado</h2>
          <p className="subtitle">Agora é só aguardar que logo o café chegará até você</p>
        </TitleWrapper>

        <CardsWrapper>

          <CardContainer>
            <OrderList>
              <li>
                <FeaturedIcon variant="purple" icon={<MapPin />} />
                <OrderInfos>
                  <p>Entrega em <strong>{orderInfos.address.street}, {orderInfos.address.number}</strong></p>
                  <p>{orderInfos.address.neighbourhood} - {orderInfos.address.city}, {orderInfos.address.state}</p>
                </OrderInfos>
              </li>

              <li>
                <FeaturedIcon variant="yellow" icon={<Timer />} />
                <OrderInfos>
                  <p>Previsão de entrega</p>
                  <p><strong>20 min - 30 min</strong></p>
                </OrderInfos>
              </li>

              <li>
                <FeaturedIcon variant="yellowDark" icon={<CurrencyDollar />} />
                <OrderInfos>
                  <p>Pagamento na entrega</p>
                  <p><strong>{getPaymentMethod(orderInfos.paymentMethod)}</strong></p>
                </OrderInfos>
              </li>
            </OrderList>

          </CardContainer>

          <ConfirmationImage>
            <img src={illustration} alt="entregador na moto" />
          </ConfirmationImage>

        </CardsWrapper>
      </ConfirmationContainer>
    </Container>
  );
}