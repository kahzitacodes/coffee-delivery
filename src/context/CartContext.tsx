import { ReactNode, createContext, useEffect, useReducer } from 'react';
import { AddressType, CartItem, OrderInfos, cartReducer } from '../reducers/cart/reducer';
import { addNewItemAction, confirmOrderAction, removeItemAction, updateItemAction } from '../reducers/cart/actions';
import { CoffeeType } from '../@types/coffees';
import { useNavigate } from 'react-router-dom';

interface CreateCartItemData {
  product: CoffeeType;
  quantity: number;
}

interface CartContextTypes {
  order: CartItem[],
  orderInfos: OrderInfos,
  orderItemsQuantity: number,
  addItemstoCart: (data: CreateCartItemData) => void,
  removeItemFromCart: (id: string) => void,
  updateCartItem: (id: string, quantity: number) => void;
  confirmOrder: (total: number, address: AddressType, paymentMethod: string) => void;
}

export const CartContext = createContext({} as CartContextTypes);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({
  children,
}: CartContextProviderProps) {

  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      order: [],
      orderInfos: {}
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-delivery:cart-state-1.0.0',
      );
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    },
  );

  const { order, orderInfos } = cartState;

  const orderItemsQuantity = order.reduce((cartSum, item) => {
    return cartSum + item.quantity;
  }, 0);

  const navigate = useNavigate();

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);

    localStorage.setItem('@ignite-delivery:cart-state-1.0.0', stateJSON);
  }, [cartState]);

  function addItemstoCart(data: CreateCartItemData) {
    const newItem: CartItem = {
      product: data.product,
      quantity: data.quantity,
    };

    dispatch(addNewItemAction(newItem));
  }

  function removeItemFromCart(id: string) {
    dispatch(removeItemAction(id));
  }

  function updateCartItem(id: string, quantity: number) {
    dispatch(updateItemAction(id, quantity));
  }

  function confirmOrder(total: number, address: AddressType, paymentMethod: string) {

    const newOrder = {
      id: String(new Date().getTime()),
      total: total,
      address: address,
      paymentMethod: paymentMethod,
      orderItems: order
    };

    navigate('/confirmation');
    dispatch(confirmOrderAction(newOrder));
  }

  return (
    <CartContext.Provider value={{
      order,
      orderItemsQuantity,
      orderInfos,
      addItemstoCart,
      removeItemFromCart,
      updateCartItem,
      confirmOrder,
    }}>
      {children}
    </CartContext.Provider>
  );
}