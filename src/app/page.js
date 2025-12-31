import Hero from '@/components/sections/Hero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import PortfolioShowcase from '@/components/sections/PortfolioShowcase';
import Philosophy from '@/components/sections/Philosophy';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <PortfolioShowcase />
      <Philosophy />
    </>
  );
}
