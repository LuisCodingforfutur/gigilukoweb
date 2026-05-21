import StickyScrollShowcase from '../components/v3/StickyScrollShowcase';

const Home = () => {
  return (
    <main className="bg-[#05000a] min-h-screen">
      {/* Falls du noch eine Hero-Sektion (mit dem Waitlist-Button) hast, 
        kannst du sie hier über der Animation einfügen!
      */}
      
      {/* Das neue V3 Herzstück */}
      <StickyScrollShowcase />
      
    </main>
  );
};

export default Home;
