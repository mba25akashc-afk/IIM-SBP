import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Product, 
  Course, 
  Bundle, 
  CartItem, 
  SkillProfile, 
  UserProfile, 
  ExamType, 
  SkillType,
  Order 
} from '../types';
import { PRODUCTS, COURSES, BUNDLES } from '../data/mockData';

export type PageView = 
  | 'home' 
  | 'shop' 
  | 'product-detail' 
  | 'courses' 
  | 'quiz' 
  | 'dashboard' 
  | 'cart' 
  | 'checkout' 
  | 'order-success' 
  | 'community' 
  | 'about';

interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'amber';
}

interface AppContextType {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  selectedProductId: string;
  setSelectedProductId: (id: string) => void;
  selectedCourseId: string;
  setSelectedCourseId: (id: string) => void;
  
  // Navigation helpers
  navigateToProduct: (id: string) => void;
  navigateToShopWithFilter: (filter: { category?: string; skill?: SkillType; exam?: ExamType }) => void;
  activeShopFilter: { category?: string; skill?: SkillType; exam?: ExamType };
  
  // Cart
  cart: CartItem[];
  addToCart: (item: {
    productId?: string;
    courseId?: string;
    bundleId?: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    type: 'product' | 'course' | 'bundle';
    quantity?: number;
    category?: string;
  }) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (open: boolean) => void;
  appliedPromo: string | null;
  applyPromoCode: (code: string) => boolean;
  discountAmount: number;
  shippingFee: number;
  finalTotal: number;
  
  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  
  // User & Personalization
  userProfile: UserProfile;
  updateExamPreference: (exam: ExamType) => void;
  updateSkillPreference: (skill: SkillType) => void;
  isPersonalizeModalOpen: boolean;
  setIsPersonalizeModalOpen: (open: boolean) => void;
  
  // Quiz
  skillProfile: SkillProfile | null;
  setSkillProfile: (profile: SkillProfile | null) => void;
  
  // Search
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;
  
  // Orders
  lastOrder: Order | null;
  completeCheckout: (shippingDetails: any, paymentMethod: string) => void;
  
  // Daily Drill Challenge Modal
  isChallengeModalOpen: boolean;
  setIsChallengeModalOpen: (open: boolean) => void;
  completeTodayDrill: () => void;
  isTodayDrillCompleted: boolean;
  
  // Toast
  toasts: ToastMessage[];
  addToast: (message: string, type?: 'success' | 'info' | 'amber') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('prod-focus-1');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('course-focus-deepwork');
  const [activeShopFilter, setActiveShopFilter] = useState<{ category?: string; skill?: SkillType; exam?: ExamType }>({});
  
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'cart-1',
      productId: 'prod-focus-1',
      name: 'Deep Work Focus Kit',
      price: 799,
      originalPrice: 1199,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
      quantity: 1,
      type: 'product',
      category: 'Focus'
    }
  ]);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [appliedPromo, setAppliedPromo] = useState<string | null>('SKILLGYM');
  
  const [wishlist, setWishlist] = useState<string[]>(['prod-desk-1', 'prod-apparel-1']);
  
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Akash Sharma',
    email: 'akash.aspirant@iims.ac.in',
    exam: 'CAT / MBA',
    targetYear: '2026',
    targetSkill: 'Focus',
    skillScore: 74,
    streak: 12,
    xp: 2840,
    enrolledCourses: [
      {
        courseId: 'course-focus-deepwork',
        progress: 67,
        currentDay: 14,
        totalDays: 21,
        nextDrill: '50-minute zero-friction reading drill'
      },
      {
        courseId: 'course-speed-math',
        progress: 53,
        currentDay: 32,
        totalDays: 60,
        nextDrill: 'Rapid cross-multiplication & Vedic shortcuts'
      }
    ],
    wishlist: ['prod-desk-1'],
    completedDrillsCount: 16
  });

  const [skillProfile, setSkillProfile] = useState<SkillProfile | null>({
    speed: 62,
    memory: 78,
    focus: 54,
    reasoning: 71,
    communication: 48,
    decisionMaking: 65,
    overallScore: 63,
    weakestSkill: 'Focus',
    strongestSkill: 'Memory',
    recommendedCourseId: 'course-focus-deepwork',
    recommendedProductId: 'prod-focus-1',
    recommendedBundleId: 'bundle-focus'
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [isPersonalizeModalOpen, setIsPersonalizeModalOpen] = useState<boolean>(false);
  
  const [lastOrder, setLastOrder] = useState<Order | null>(null);
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState<boolean>(false);
  const [isTodayDrillCompleted, setIsTodayDrillCompleted] = useState<boolean>(false);
  
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Window scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const addToast = (message: string, type: 'success' | 'info' | 'amber' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const navigateToProduct = (id: string) => {
    setSelectedProductId(id);
    setCurrentPage('product-detail');
  };

  const navigateToShopWithFilter = (filter: { category?: string; skill?: SkillType; exam?: ExamType }) => {
    setActiveShopFilter(filter);
    setCurrentPage('shop');
  };

  const addToCart = (item: {
    productId?: string;
    courseId?: string;
    bundleId?: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    type: 'product' | 'course' | 'bundle';
    quantity?: number;
    category?: string;
  }) => {
    setCart((prev) => {
      const matchIndex = prev.findIndex(
        (ci) =>
          (item.productId && ci.productId === item.productId) ||
          (item.courseId && ci.courseId === item.courseId) ||
          (item.bundleId && ci.bundleId === item.bundleId)
      );

      const qty = item.quantity || 1;

      if (matchIndex > -1) {
        const next = [...prev];
        next[matchIndex].quantity += qty;
        return next;
      }

      const newItem: CartItem = {
        id: 'cart-' + Date.now().toString(),
        productId: item.productId,
        courseId: item.courseId,
        bundleId: item.bundleId,
        name: item.name,
        price: item.price,
        originalPrice: item.originalPrice,
        image: item.image,
        quantity: qty,
        type: item.type,
        category: item.category
      };
      return [...prev, newItem];
    });

    addToast(`Added "${item.name}" to your bag!`, 'success');
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((i) => i.id !== itemId));
    addToast('Item removed from cart', 'info');
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.id === itemId) {
            const nextQty = i.quantity + delta;
            return nextQty > 0 ? { ...i, quantity: nextQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        addToast('Removed from wishlist', 'info');
        return prev.filter((id) => id !== productId);
      } else {
        addToast('Saved to wishlist!', 'amber');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'SKILLGYM' || clean === 'MOCKSEASON' || clean === 'RANKBUILDER') {
      setAppliedPromo(clean);
      addToast(`Promo "${clean}" applied: 10% discount!`, 'success');
      return true;
    }
    addToast('Invalid promo code. Try SKILLGYM', 'info');
    return false;
  };

  const cartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const cartSubtotal = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const discountAmount = appliedPromo ? Math.round(cartSubtotal * 0.1) : 0;
  const shippingFee = cartSubtotal >= 999 || cartSubtotal === 0 ? 0 : 99;
  const finalTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);

  const updateExamPreference = (exam: ExamType) => {
    setUserProfile((prev) => ({ ...prev, exam }));
    addToast(`Personalized ecosystem set for ${exam} aspirants`, 'amber');
  };

  const updateSkillPreference = (skill: SkillType) => {
    setUserProfile((prev) => ({ ...prev, targetSkill: skill }));
    addToast(`Primary focus set to: ${skill}`, 'info');
  };

  const completeTodayDrill = () => {
    setIsTodayDrillCompleted(true);
    setUserProfile((prev) => ({
      ...prev,
      streak: prev.streak + 1,
      xp: prev.xp + 150,
      completedDrillsCount: prev.completedDrillsCount + 1,
      skillScore: Math.min(100, prev.skillScore + 2)
    }));
    addToast('+150 XP Earned! 13-Day Streak Maintained 🔥', 'success');
    setIsChallengeModalOpen(false);
  };

  const completeCheckout = (shippingDetails: any, paymentMethod: string) => {
    const orderNumber = 'SKILLSUTRA-IN-' + Math.floor(100000 + Math.random() * 900000);
    const newOrder: Order = {
      id: orderNumber,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      items: [...cart],
      subtotal: cartSubtotal,
      discount: discountAmount,
      shipping: shippingFee,
      total: finalTotal,
      status: 'Processing',
      shippingAddress: shippingDetails,
      paymentMethod,
      trackingNumber: 'DELHIVERY-' + Math.floor(10000000 + Math.random() * 90000000)
    };

    setLastOrder(newOrder);
    clearCart();
    setCurrentPage('order-success');
    addToast('Order confirmed! Aspirant kit dispatched soon.', 'success');
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedProductId,
        setSelectedProductId,
        selectedCourseId,
        setSelectedCourseId,
        navigateToProduct,
        navigateToShopWithFilter,
        activeShopFilter,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        appliedPromo,
        applyPromoCode,
        discountAmount,
        shippingFee,
        finalTotal,
        wishlist,
        toggleWishlist,
        isInWishlist,
        userProfile,
        updateExamPreference,
        updateSkillPreference,
        isPersonalizeModalOpen,
        setIsPersonalizeModalOpen,
        skillProfile,
        setSkillProfile,
        searchQuery,
        setSearchQuery,
        isSearchModalOpen,
        setIsSearchModalOpen,
        lastOrder,
        completeCheckout,
        isChallengeModalOpen,
        setIsChallengeModalOpen,
        completeTodayDrill,
        isTodayDrillCompleted,
        toasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
