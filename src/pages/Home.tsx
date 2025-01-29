import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SignUp from '../components/SignUp';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <SignUp />
    </main>
  );
}