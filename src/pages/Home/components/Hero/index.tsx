import { Container } from '../../../../layouts/DefaultLayout/styles'
import { HeroWrapper, HeroContent, HeroImage, HeroContainer, HeroList } from './style'
import { HeroProps } from './types'

export function Hero({ image, imageAlt, title, subtitle, featuresList }: HeroProps) {
  return (
    <HeroWrapper>
      <Container>
        <HeroContainer>
          <HeroContent>
            <h1 className='h1'>{title}</h1>
            <p>{subtitle}</p>
            <HeroList>
              {featuresList.map((item) => {
                return (
                  <li key={item.text}>
                    {item.featuredIcon}
                    <span>{item.text}</span>
                  </li>
                )
              })}
            </HeroList>
          </HeroContent>
          <HeroImage>
            <img src={image} alt={imageAlt} />
          </HeroImage>
        </HeroContainer>
      </Container>
    </HeroWrapper>
  )
}