import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { AnnouncementBar } from './components/common/AnnouncementBar';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/common/CartDrawer';
import { SearchModal } from './components/common/SearchModal';
import { PersonalizeModal } from './components/common/PersonalizeModal';
import { DailyDrillModal } from './components/common/DailyDrillModal';
import { ToastContainer } from './components/common/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CoursesPage } from './pages/CoursesPage';
import { SkillQuizPage } from './pages/SkillQuizPage';
import { DashboardPage } from './pages/DashboardPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';
import { CommunityPage } from './pages/CommunityPage';
import { AboutPage } from './pages/AboutPage';

const AppContent: React.FC = () => {
  const { currentPage } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'product-detail':
        return <ProductDetailPage />;
      case 'courses':
        return <CoursesPage />;
      case 'quiz':
        return <SkillQuizPage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'order-success':
        return <OrderSuccessPage />;
      case 'community':
        return <CommunityPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-slate-900 selection:bg-amber-200 selection:text-indigo-950 font-sans">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <AnnouncementBar />

      {/* 2. PRIMARY NAVBAR */}
      <Navbar />

      {/* 3. ACTIVE VIEW CONTAINER */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* 4. FOOTER */}
      <Footer />

      {/* GLOBAL MODALS & OVERLAYS */}
      <CartDrawer />
      <SearchModal />
      <PersonalizeModal />
      <DailyDrillModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
