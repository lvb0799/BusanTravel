import React from 'react';

/** Two composition-specific illustrations: no cropping of the family on mobile. */
export default function Hero() {
  return <section className="hero hero-image" aria-label="一家三口的釜山五天四夜旅行">
    <picture>
      <source media="(max-width: 600px)" srcSet={`${import.meta.env.BASE_URL}images/hero-mobile.png`} />
      <img src={`${import.meta.env.BASE_URL}images/hero-desktop.png`} alt="一家三口（爸爸、媽媽和小男孩）一起去釜山，收集五天四夜的幸福回憶" fetchPriority="high" />
    </picture>
  </section>;
}
