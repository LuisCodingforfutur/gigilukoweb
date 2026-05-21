import HeroSection from '../components/v3/HeroSection';
import StickyScrollShowcase from '../components/v3/StickyScrollShowcase';

const Home = () => {
  return (
    <main className="bg-white dark:bg-[#05000a] min-h-screen transition-colors duration-500">
      
      {/* Der neue KI-Startup Hero-Bereich mit der Waitlist */}
      <HeroSection />
      
      {/* Das neue V3 Herzstück (4-Bilder) */}
      <StickyScrollShowcase />
      
    </main>
  );
};

export default Home;
