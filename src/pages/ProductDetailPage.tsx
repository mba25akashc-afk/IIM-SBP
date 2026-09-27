import React, { useState } from 'react';
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  Check, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  ChevronRight,
  Plus,
  Minus,
  Layers,
  Share2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, COURSES, BUNDLES } from '../data/mockData';
import { ProductCard } from '../components/common/ProductCard';

export const ProductDetailPage: React.FC = () => {
  const { 
    selectedProductId, 
    addToCart, 
    setCurrentPage, 
    toggleWishlist, 
    isInWishlist, 
    addToast,
    navigateToProduct 
  } = useApp();

  const product = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[4]; // Default to Deep Work Focus Kit
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'inside' | 'why' | 'how' | 'reviews' | 'shipping'>('inside');

  // Related products / Pairs well with
  const pairsWellWith = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === 'Digital' || p.category === 'Desk' || p.category === 'Wellness')
  ).slice(0, 3);

  // Recommended smart bundle if applicable
  const smartBundle = BUNDLES.find((b) => b.productIds.includes(product.id)) || BUNDLES[0];

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      quantity,
      type: 'product',
      category: product.category
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setCurrentPage('checkout');
  };

  const handleAddSmartBundle = () => {
    addToCart({
      bundleId: smartBundle.id,
      name: smartBundle.name,
      price: smartBundle.bundlePrice,
      originalPrice: smartBundle.originalTotal,
      image: smartBundle.image,
      type: 'bundle',
      category: 'System Bundle'
    });
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] pb-28 sm:pb-20">
      
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 flex-wrap">
          <button onClick={() => setCurrentPage('home')} className="hover:text-slate-900 cursor-pointer">
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <button onClick={() => setCurrentPage('shop')} className="hover:text-slate-900 cursor-pointer">
            Shop
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-400">{product.category}</span>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-900 font-semibold truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* PRODUCT MAIN DISPLAY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
          
          {/* LEFT: IMAGE GALLERY (5 COLS) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative group">
              <img
                src={selectedImage || product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-amber-500 text-indigo-950 font-extrabold text-xs uppercase px-2.5 py-1 rounded shadow-sm">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 cursor-pointer transition-all ${
                      selectedImage === img ? 'border-amber-500 shadow-sm' : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.name} preview ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: BUYING BOX & DETAILS (7 COLS) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category, Skill & Exam Badges */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                  {product.category}
                </span>
                <span className="text-xs font-semibold text-indigo-900 bg-indigo-50 px-2.5 py-1 rounded-md">
                  Skill: {product.skill}
                </span>
                <div className="flex items-center gap-1 text-[11px] text-slate-500">
                  <span>Target:</span>
                  <span className="font-semibold text-slate-700">{product.exams.join(', ')}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 leading-tight">
                {product.name}
              </h1>

              {/* Tagline / Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
                {product.shortBenefit}
              </p>

              {/* Rating & Social Proof */}
              <div className="flex items-center gap-3 mt-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                  <span className="font-extrabold text-xs text-amber-950 font-mono">{product.rating}</span>
                  <span className="text-[11px] text-amber-800">/ 5.0</span>
                </div>
                <span className="text-xs text-slate-500 underline font-medium">
                  {product.reviewsCount} verified aspirant reviews
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> In Stock (Dispatches within 24h)
                </span>
              </div>

              {/* PRICING */}
              <div className="py-5 flex items-baseline gap-3">
                <span className="font-mono font-extrabold text-3xl sm:text-4xl text-indigo-950">
                  ₹{product.price}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="font-mono text-base text-slate-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Save ₹{product.originalPrice - product.price} (
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF)
                    </span>
                  </>
                )}
              </div>

              {/* CORE HIGHLIGHTS BULLETS */}
              <div className="space-y-2 mb-6 bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Why Aspirants Rely On This:
                </span>
                {product.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* QUANTITY & ACTIONS */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50 p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-600"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 font-mono font-bold text-sm text-slate-900">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-600"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-3 rounded-xl border transition-colors cursor-pointer ${
                      isFavorited ? 'border-rose-300 bg-rose-50 text-rose-600' : 'border-slate-200 text-slate-400 hover:text-slate-700'
                    }`}
                    title="Save to Wishlist"
                  >
                    <Heart className={`w-5 h-5 ${isFavorited ? 'fill-rose-500' : ''}`} />
                  </button>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      addToast('Product link copied to clipboard!', 'info');
                    }}
                    className="p-3 rounded-xl border border-slate-200 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                    title="Share"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={handleAddToCart}
                    className="py-4 bg-[#141738] hover:bg-indigo-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag (₹{product.price * quantity})</span>
                  </button>

                  <button
                    onClick={handleBuyNow}
                    className="py-4 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-indigo-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Instant Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* TRUST BADGE ROW */}
              <div className="pt-6 mt-6 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-[10px] text-slate-500 font-medium">
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-4 h-4 text-slate-600" />
                  <span>Free Shipping &gt; ₹999</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RotateCcw className="w-4 h-4 text-slate-600" />
                  <span>7-Day Easy Return</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-slate-600" />
                  <span>TCS iON Compliant</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* TABBED SPECIFICATION & CONTENT SECTION */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
          
          {/* TABS HEADER */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto scrollbar-none">
            {[
              { id: 'inside', label: 'What’s Inside' },
              { id: 'why', label: 'Why You’ll Love It' },
              { id: 'how', label: 'How to Use It' },
              { id: 'reviews', label: `Reviews (${product.reviewsCount})` },
              { id: 'shipping', label: 'Shipping & Returns' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 font-heading text-xs sm:text-sm font-bold tracking-tight rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#141738] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB CONTENTS */}
          <div className="pt-6">
            {activeTab === 'inside' && (
              <div className="space-y-4 max-w-2xl">
                <h4 className="font-heading font-bold text-base text-slate-900">
                  Unboxing Your Aspirant Kit:
                </h4>
                <ul className="space-y-2.5">
                  {product.whatsInside.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs shrink-0">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'why' && (
              <div className="space-y-4 max-w-2xl text-xs sm:text-sm text-slate-700 leading-relaxed">
                <h4 className="font-heading font-bold text-base text-slate-900">
                  Engineered Around Cognitive Habits:
                </h4>
                <p>
                  Most college merchandise is slapped together with cheap prints. SkillSutra products are designed from the ground up to solve concrete behavioral flaws in exam preparation: phone-checking reflexes, friction during marathon rough-sheet calculations, and exam-day panic.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/50">
                    <span className="font-bold text-indigo-950 block text-xs">Tactile Habit Loop</span>
                    <span className="text-[11px] text-slate-600">Physical triggers create faster deep-work reflexes than software apps that tempt you back onto Instagram.</span>
                  </div>
                  <div className="p-3.5 bg-indigo-50/60 rounded-xl border border-indigo-200/50">
                    <span className="font-bold text-indigo-950 block text-xs">Library & Center Safe</span>
                    <span className="text-[11px] text-slate-600">Silent rubber bases, non-reflective materials, and 100% compliant transparent pouches.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'how' && (
              <div className="space-y-3 max-w-2xl text-xs sm:text-sm text-slate-700 leading-relaxed">
                <h4 className="font-heading font-bold text-base text-slate-900">
                  Daily Protocol Blueprint:
                </h4>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="font-medium text-slate-800">{product.howToUse}</p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6 max-w-3xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="font-extrabold text-2xl text-slate-900 font-mono">{product.rating}</span>
                    <span className="text-slate-400 text-xs ml-1">out of 5.0</span>
                  </div>
                  <button
                    onClick={() => addToast('Thank you! Review submission form opened.', 'info')}
                    className="px-4 py-2 border border-slate-300 text-slate-800 text-xs font-bold rounded-xl hover:bg-slate-50"
                  >
                    Write an Aspirant Review
                  </button>
                </div>

                <div className="space-y-4">
                  {product.reviews.length > 0 ? (
                    product.reviews.map((rev) => (
                      <div key={rev.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs text-slate-900">{rev.author}</span>
                            <span className="text-[10px] bg-indigo-100 text-indigo-900 px-1.5 py-0.5 rounded font-medium">{rev.exam}</span>
                            <span className="text-[10px] text-slate-400">• {rev.city}</span>
                          </div>
                          <span className="text-[10px] text-slate-400">{rev.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                          ))}
                        </div>
                        <h5 className="font-bold text-xs text-slate-800">{rev.title}</h5>
                        <p className="text-xs text-slate-600 leading-relaxed">{rev.comment}</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-slate-500 py-4">
                      No customer reviews yet for this specific drop batch. Be the first aspirant to review!
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-3 max-w-2xl text-xs sm:text-sm text-slate-700 leading-relaxed">
                <h4 className="font-heading font-bold text-base text-slate-900">
                  Delivery & Logistics Details:
                </h4>
                <ul className="space-y-2">
                  <li>• <strong>Dispatch:</strong> Same-day dispatch for orders placed before 2 PM IST.</li>
                  <li>• <strong>Transit Time:</strong> 2-3 days for Delhi NCR, Mumbai, Bengaluru, Hyderabad; 3-5 days for other locations.</li>
                  <li>• <strong>Returns:</strong> 7-day hassle-free doorstep pickup if size or quality doesn’t match your expectations.</li>
                  <li>• <strong>Digital Items:</strong> Instant automated download link sent directly to your email.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* SMART BUNDLE UP-SELL (E.G. "COMPLETE FOCUS BUNDLE") */}
        {smartBundle && (
          <div className="mt-12 bg-gradient-to-r from-[#141738] via-[#1a1e4a] to-[#12153b] text-white rounded-3xl p-6 sm:p-10 border border-indigo-900 shadow-xl">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest bg-amber-400 text-indigo-950 px-2.5 py-1 rounded inline-block mb-2">
                  SMART SYSTEM BUNDLE
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  {smartBundle.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  {smartBundle.tagline}
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs">
                  <span className="font-mono font-bold text-amber-400 text-xl">₹{smartBundle.bundlePrice}</span>
                  <span className="font-mono text-slate-400 line-through">₹{smartBundle.originalTotal}</span>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded font-bold">
                    Save ₹{smartBundle.savings}
                  </span>
                </div>
              </div>

              <button
                onClick={handleAddSmartBundle}
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-indigo-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <Layers className="w-4 h-4" />
                <span>Build Complete Bundle</span>
              </button>
            </div>
          </div>
        )}

        {/* PAIRS WELL WITH */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
              Pairs Well With
            </h3>
            <button onClick={() => setCurrentPage('shop')} className="text-xs font-bold text-indigo-950 hover:text-amber-600">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pairsWellWith.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>

      {/* MOBILE STICKY BOTTOM ACTION BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3 flex items-center justify-between shadow-2xl">
        <div>
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">Total Price</span>
          <span className="font-mono font-extrabold text-lg text-indigo-950">₹{product.price * quantity}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleAddToCart}
            className="px-5 py-2.5 bg-[#141738] text-white text-xs font-bold rounded-xl uppercase tracking-wider"
          >
            Add to Bag
          </button>
          <button
            onClick={handleBuyNow}
            className="px-5 py-2.5 bg-amber-400 text-indigo-950 text-xs font-bold rounded-xl uppercase tracking-wider"
          >
            Buy Now
          </button>
        </div>
      </div>

    </div>
  );
};
