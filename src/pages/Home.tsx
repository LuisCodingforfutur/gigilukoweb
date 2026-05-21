import HeroSection from '../components/v3/HeroSection';
import StickyScrollShowcase from '../components/v3/StickyScrollShowcase';

const Home = () => {
  return (
    <main className="bg-white dark:bg-[#05000a] min-h-screen transition-colors duration-500">
      
      {/* 1. Das V3 Herzstück (4-Bilder) kommt jetzt zuerst */}
      <StickyScrollShowcase />
      
      {/* 2. Der Waitlist-Bereich (unsere HeroSection) wandert ans Ende vor den Footer */}
      <HeroSection />
      
    </main>
  );
};

export default Home;
