import { ShoppingCart } from 'phosphor-react'
import { AddToCartButtonStyle, CartButtonStyle } from './styles'
import { ButtonHTMLAttributes } from 'react'

export function CartButton() {
  return (
    <CartButtonStyle>
      <ShoppingCart weight='fill' size={22} />
    </CartButtonStyle>
  )
}

export function AddToCartButton({ ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <AddToCartButtonStyle {...rest}>
      <ShoppingCart weight='fill' size={20} />
    </AddToCartButtonStyle>
  )
}