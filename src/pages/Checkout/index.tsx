import { CardCartContainer, CardContainer, CardTitle, CardsWrapper, CheckoutContainer, FormContainer } from './styles';
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import { Container } from '../../layouts/DefaultLayout/styles';
import { Input } from '../../components/Input';
import { SelectOptions } from '../../components/ButtonSelect';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CartContext } from '../../context/CartContext';
import { ProductsList } from './components/ProductsList';
import { OrderSummary } from './components/OrderSummary';
import { Button } from '../../components/Button';

const paymentOptions = [
  {
    name: "payment-method",
    label: "Cartão de Crédito",
    value: "credit-card",
    id: "credit-card",
    icon: <CreditCard />,
  },
  {
    name: "payment-method",
    label: "Cartão de Débito",
    value: "debit-card",
    id: "debit-card",
    icon: <Bank />,
  },
  {
    name: "payment-method",
    label: "Dinheiro",
    value: "money",
    id: "money",
    icon: <Money />,
  },
];

const checkoutFormSchema = yup
  .object().shape({
    zipcode: yup.number().required('Campo obrigatório'),
    street: yup.string().required('Campo obrigatório'),
    number: yup.number().required('Campo obrigatório'),
    complement: yup.string().required('Campo obrigatório'),
    neighbourhood: yup.string().required('Campo obrigatório'),
    city: yup.string().required('Campo obrigatório'),
    state: yup.string().min(2).max(2).required('Campo obrigatório')
  });

type Address = yup.InferType<typeof checkoutFormSchema>;

export function Checkout() {

  const { orderItemsQuantity, confirmOrder } = useContext(CartContext);

  const newAddress = useForm<Address>({
    resolver: yupResolver(checkoutFormSchema),
    mode: 'onChange'
  });

  const { register, handleSubmit, formState: { errors }, watch } = newAddress;

  const [payment, setPayment] = useState<string>("");
  const [total, setTotal] = useState(0);

  function handleChange(e: any) {
    setPayment(e);
  }

  function handleGetTotal(number: number) {
    setTotal(number);
  }

  const isCartEmpty = orderItemsQuantity === 0;

  function handleConfirmOrder(address: Address) {
    const newAddress = {
      zipcode: address.zipcode,
      street: address.street,
      number: address.number,
      complement: address.complement,
      neighbourhood: address.neighbourhood,
      city: address.city,
      state: address.state,
    };
    confirmOrder(
      total,
      newAddress,
      payment
    );
  }

  return (
    <Container>
      {isCartEmpty
        ?
        "Seu carrinho está vazio"
        :
        <form>
          <CheckoutContainer>

            <CardsWrapper>
              <h5>Complete seu pedido</h5>

              <CardContainer>
                <CardTitle>
                  <MapPinLine size={22} color="#C47F17" />
                  <div className="titleContent">
                    <p className="title">Endereço de Entrega</p>
                    <p className="text">Informe o endereço onde deseja receber seu pedido</p>
                  </div>
                </CardTitle>
                <FormContainer>
                  <div className="row">
                    <div className="flex-1">
                      <Input label="CEP" id="zipcode" {...register('zipcode')} />
                    </div>
                    <div className="flex-2"></div>
                  </div>
                  <div className="row">
                    <div className="flex-1">
                      <Input label="Rua" id="street" {...register('street')} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="flex-1">
                      <Input label="Número" id="number" {...register('number')} />
                    </div>
                    <div className="flex-2">
                      <Input label="Complemento" id="complement" {...register('complement')} />
                    </div>
                  </div>

                  <div className="row">
                    <div className="flex-1">
                      <Input label="Bairro" id="neighbourhood" {...register('neighbourhood')} />
                    </div>
                    <div className="row flex-2">
                      <div className="flex-3">
                        <Input label="Cidade" id="cidade" {...register('city')} />
                      </div>
                      <div className="flex-1">
                        <Input label="UF" id="state" {...register('state')} />
                      </div>
                    </div>
                  </div>
                </FormContainer>
              </CardContainer>

              <CardContainer>
                <CardTitle>
                  <CurrencyDollar size={22} color="#8047F8" />
                  <div className="titleContent">
                    <p className="title">Pagamento</p>
                    <p className="text">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                  </div>
                </CardTitle>
                <SelectOptions buttons={paymentOptions} value={payment} name='payments' handleChange={handleChange} />
              </CardContainer>

            </CardsWrapper>

            <CardsWrapper>
              <h5>Cafés selecionados</h5>
              <CardCartContainer>
                <ProductsList />
                <OrderSummary handleGetTotal={handleGetTotal} total={total} />
                <Button label="Confirmar pedido" variant="yellow" size="lg" onClick={handleSubmit(handleConfirmOrder)} />
              </CardCartContainer>
            </CardsWrapper>

          </CheckoutContainer>
        </form>
      }
    </Container>
  );
}
