import { IconContext } from 'phosphor-react'
import { IconContainer } from './style'
import { FeaturedIconProps } from './types'

export function FeaturedIcon({ variant, icon }: FeaturedIconProps) {
  return (
    <IconContext.Provider value={{ size: 16, weight: "fill" }}>
      <IconContainer variant={variant}>
        {icon}
      </IconContainer>
    </IconContext.Provider>
  )
}