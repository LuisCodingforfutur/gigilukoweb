import AmbassadorBanner from '../components/v3/AmbassadorBanner';
import HeroSection from '../components/v3/HeroSection';
import StickyScrollShowcase from '../components/v3/StickyScrollShowcase';

const Home = () => {
  return (
    <main className="bg-white dark:bg-[#05000a] min-h-screen transition-colors duration-500 pt-10">
      
      {/* Das globale Ambassador Banner (Fixed Top) */}
      <AmbassadorBanner />
      
      {/* 1. Das V3 Herzstück (4-Bilder) */}
      <StickyScrollShowcase />
      
      {/* 2. Der Waitlist-Bereich (unsere HeroSection) */}
      <HeroSection />
      
    </main>
  );
};

export default Home;
