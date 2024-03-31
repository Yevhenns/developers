import { useRef } from 'react';
import { DevelopersSection } from './containers/DevelopersSection';
import { Header } from './containers/Header';
import { HeroSection } from './containers/HeroSection';
import { SignUpSection } from './containers/SignUpSection';

export function App() {
  const developersRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  console.log(typeof signUpRef.current);

  return (
    <>
      <Header developersRef={developersRef} signUpRef={signUpRef} />
      <HeroSection signUpRef={signUpRef} />
      <DevelopersSection developersRef={developersRef} />
      <SignUpSection signUpRef={signUpRef} />
    </>
  );
}
