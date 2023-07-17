import { AddressType, CartItem, OrderInfos, OrderState } from './reducer';

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  CONFIRM_ORDER = 'CONFIRM_ORDER'
}

export function addNewItemAction(newItem: CartItem) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      newItem,
    },
  };
}

export function removeItemAction(itemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  };
}

export function updateItemAction(itemId: string, newQuantity: number) {
  return {
    type: ActionTypes.UPDATE_ITEM,
    payload: {
      itemId,
      newQuantity
    }
  };
}

export function confirmOrderAction(orderInfos: OrderInfos) {
  return {
    type: ActionTypes.CONFIRM_ORDER,
    payload: {
      orderInfos
    }
  };
}
