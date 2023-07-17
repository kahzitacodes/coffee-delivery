import { CoffeeType } from '../../@types/coffees';
import { ActionTypes } from './actions';

export interface CartItem {
  product: CoffeeType;
  quantity: number;
}

export interface PaymentMethodType {
  paymentMethod: "credit-card" | "debit-card" | "money";
}

export interface AddressType {
  zipcode: number;
  street: string;
  number: number;
  complement: string;
  neighbourhood: string;
  city: string;
  state: string;
}

export interface OrderInfos {
  id: string;
  total: number,
  address: AddressType;
  paymentMethod: string;
  orderItems: CartItem[];
}

export interface OrderState {
  order: CartItem[];
  orderInfos: OrderInfos;
}

export function cartReducer(state: OrderState, action: any) {

  switch (action.type) {

    case ActionTypes.ADD_NEW_ITEM:
      const hasProduct = state.order.filter((item) => item.product.id === action.payload.newItem.product.id)[0];

      if (hasProduct) {
        return {
          ...state,
          order: state.order.map((item) => {
            if (item.product.id === action.payload.newItem.product.id) {
              return { ...item, quantity: item.quantity + action.payload.newItem.quantity };
            }
            return item;
          })
        };
      }
      return {
        ...state,
        order: [...state.order, action.payload.newItem],
      };

    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        order: state.order.filter((item) => item.product.id !== action.payload.itemId),
      };

    case ActionTypes.UPDATE_ITEM:
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.product.id === action.payload.itemId) {
            return { ...item, quantity: action.payload.newQuantity };
          }
          return item;
        })
      };

    case ActionTypes.CONFIRM_ORDER:
      return {
        ...state,
        order: [],
        orderInfos: action.payload.orderInfos
      };

    default:
      return state;
  }
}
