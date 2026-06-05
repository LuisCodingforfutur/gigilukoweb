import AmbassadorBanner from '../components/v3/AmbassadorBanner';
import HeroSection from '../components/v3/HeroSection';
import StickyScrollShowcase from '../components/v3/StickyScrollShowcase';

const Home = () => {
  return (
    <main className="bg-white dark:bg-[#05000a] min-h-screen transition-colors duration-500 pt-10">
      
      {/* Das globale Ambassador Banner (Fixed Top) */}
      <AmbassadorBanner />

      {/* 1. Hero + Waitlist zuerst (above the fold) */}
      <HeroSection />

      {/* 2. Sticky-Scroll-Showcase als Support darunter */}
      <StickyScrollShowcase />
      
    </main>
  );
};

export default Home;
