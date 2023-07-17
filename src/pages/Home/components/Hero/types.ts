export interface HeroProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  featuresList: FeaturesListProps[];
}

export interface FeaturesListProps {
  featuredIcon: JSX.Element;
  text: string;
}
