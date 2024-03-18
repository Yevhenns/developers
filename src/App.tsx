import { DevelopersSection } from './containers/DevelopersSection';
import { Header } from './containers/Header';
import { HeroSection } from './containers/HeroSection';
import { SignUpSection } from './containers/SignUpSection';

export function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <DevelopersSection />
      <SignUpSection />
    </>
  );
}
