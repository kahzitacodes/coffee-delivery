import { Hero } from './components/Hero';
import cupOfCoffe from '../../assets/cup-of-coffe.png';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { FeaturedIcon } from '../../components/FeaturedIcon';
import { ProductsContainer, ProductsList } from './style';
import coffees from '../../products.json';
import { ProductCard } from '../../components/ProductCard';
import { Container } from '../../layouts/DefaultLayout/styles';
import { NumericStepperProvider } from '../../context/NumericStepperContext';
import { CoffeeType } from '../../@types/coffees';

export function Home() {

  const featuresList = [
    {
      featuredIcon: <FeaturedIcon icon={<ShoppingCart />} variant="yellowDark" />,
      text: "Compra simples e segura"
    },
    {
      featuredIcon: <FeaturedIcon icon={<Package />} variant="base" />,
      text: "Embalagem mantém o café intacto"
    },
    {
      featuredIcon: <FeaturedIcon icon={<Timer />} variant="yellow" />,
      text: "Entrega rápida e rastreada"
    },
    {
      featuredIcon: <FeaturedIcon icon={<Coffee />} variant="purple" />,
      text: "O café chega fresquinho até você"
    }
  ];

  return (
    <>
      <Hero
        title="Encontre o café perfeito para qualquer hora do dia"
        subtitle="Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora"
        image={cupOfCoffe}
        imageAlt="A cup of coffe"
        featuresList={featuresList}
      />

      <Container>
        <ProductsContainer>
          <h2>Nossos Cafés</h2>
          <ProductsList>
            {coffees.map((coffee: CoffeeType) => {
              return <ProductCard key={coffee.id} id={coffee.id} coffee={coffee} />;
            })}
          </ProductsList>
        </ProductsContainer>
      </Container>
    </>
  );
}
