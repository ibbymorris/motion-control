import TopNav from '@/components/TopNav';
import PromoBanner from '@/components/PromoBanner';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <>
      <div className="hidden lg:block">
        <PromoBanner />
      </div>
      <TopNav />
      <main className="flex-1 overflow-hidden flex flex-col lg:flex-row">
        <Sidebar />
        <div className="hidden lg:flex flex-1">
          <MainContent />
        </div>
      </main>
    </>
  );
}
