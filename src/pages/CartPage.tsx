import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  Truck, 
  Tag, 
  Sparkles, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/mockData';

export const CartPage: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    discountAmount,
    shippingFee,
    finalTotal,
    appliedPromo,
    applyPromoCode,
    setCurrentPage,
    addToCart,
    navigateToProduct
  } = useApp();

  const [promoInput, setPromoInput] = useState('');

  const freeShippingThreshold = 999;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingProgress = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  const cartProductIds = cart.map(i => i.productId).filter(Boolean);
  const crossSellProduct = PRODUCTS.find(p => !cartProductIds.includes(p.id) && (p.id === 'prod-well-1' || p.id === 'prod-desk-2' || p.id === 'prod-digital-1')) || PRODUCTS[0];

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim()) {
      applyPromoCode(promoInput.trim());
      setPromoInput('');
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] pb-24">
      
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5">
          <button onClick={() => setCurrentPage('home')} className="hover:text-slate-900 cursor-pointer">
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-900 font-semibold">Your Aspirant Cart</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 mb-6">
          Your Study Gear & Programs ({cart.reduce((a, c) => a + c.quantity, 0)})
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-md mx-auto my-12">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-1">Your bag is empty</h3>
            <p className="text-slate-500 text-xs mb-6">
              Equip your study desk with our research-backed kits, planners, and speed courses.
            </p>
            <button
              onClick={() => setCurrentPage('shop')}
              className="px-6 py-3 bg-[#141738] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-indigo-900"
            >
              Explore Shop
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* CART ITEMS (8 COLS) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* FREE SHIPPING PROGRESS BAR */}
              <div className="bg-amber-50/90 border border-amber-200/80 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs font-medium text-slate-800 mb-2">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-amber-600" />
                    {remainingForFreeShipping > 0 ? (
                      <span>
                        You’re <strong className="text-amber-800">₹{remainingForFreeShipping}</strong> away from <strong className="text-indigo-950 font-bold">FREE SHIPPING</strong>!
                      </span>
                    ) : (
                      <span className="text-emerald-700 font-bold">
                        🎉 Unlocked FREE Pan-India Shipping!
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full bg-amber-200/60 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-amber-600 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              {/* ITEMS LIST */}
              <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 p-4 sm:p-6 shadow-xs">
                {cart.map((item) => (
                  <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-slate-200 shrink-0 bg-slate-50"
                      />
                      <div>
                        <h4
                          onClick={() => {
                            if (item.productId) navigateToProduct(item.productId);
                          }}
                          className="font-heading font-bold text-sm sm:text-base text-slate-900 hover:text-amber-600 cursor-pointer"
                        >
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-mono font-bold text-xs sm:text-sm text-indigo-950">
                            ₹{item.price}
                          </span>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <span className="font-mono text-xs text-slate-400 line-through">
                              ₹{item.originalPrice}
                            </span>
                          )}
                          {item.category && (
                            <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                              {item.category}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                      {/* Quantity */}
                      <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1.5 hover:bg-slate-200 text-slate-600"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 font-mono font-bold text-xs text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1.5 hover:bg-slate-200 text-slate-600"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="font-mono font-extrabold text-sm sm:text-base text-indigo-950">
                        ₹{item.price * item.quantity}
                      </span>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-rose-600 p-1.5 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* RECOMMENDED CROSS-SELL */}
              {crossSellProduct && (
                <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Complete Your Study Setup
                    </span>
                    <span className="text-xs text-amber-700 font-mono font-bold">
                      Special Add-On: ₹{crossSellProduct.price}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={crossSellProduct.image}
                        alt={crossSellProduct.name}
                        className="w-14 h-14 rounded-xl object-cover border border-indigo-200 shrink-0"
                      />
                      <div>
                        <h5 className="font-bold text-xs sm:text-sm text-slate-900">{crossSellProduct.name}</h5>
                        <p className="text-[11px] text-slate-500 line-clamp-1">{crossSellProduct.shortBenefit}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => addToCart({
                        productId: crossSellProduct.id,
                        name: crossSellProduct.name,
                        price: crossSellProduct.price,
                        originalPrice: crossSellProduct.originalPrice,
                        image: crossSellProduct.image,
                        type: 'product',
                        category: crossSellProduct.category
                      })}
                      className="px-5 py-2.5 bg-[#141738] hover:bg-amber-400 hover:text-indigo-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shrink-0 cursor-pointer"
                    >
                      Add for ₹{crossSellProduct.price}
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* ORDER SUMMARY (4 COLS) */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5 sticky top-24">
              <h3 className="font-heading font-extrabold text-lg text-slate-900 pb-3 border-b border-slate-100">
                Order Summary
              </h3>

              {/* Promo Code */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="Code (e.g. SKILLGYM)"
                  className="flex-1 text-xs bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 font-mono uppercase focus:outline-hidden focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-800 text-white text-xs font-bold rounded-xl hover:bg-slate-900 transition-colors"
                >
                  Apply
                </button>
              </form>

              {appliedPromo && (
                <div className="flex items-center justify-between text-xs bg-amber-50 text-amber-800 p-2.5 rounded-lg border border-amber-200">
                  <span className="font-mono font-medium flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-amber-600" /> {appliedPromo} applied
                  </span>
                  <span className="font-bold">-₹{discountAmount}</span>
                </div>
              )}

              {/* Cost Rows */}
              <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono font-bold text-slate-900">₹{cartSubtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Discount</span>
                    <span className="font-mono">-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-mono font-bold text-slate-900">
                    {shippingFee === 0 ? <span className="text-emerald-600">FREE</span> : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-indigo-950 pt-3 border-t border-slate-200">
                  <span>Total Amount</span>
                  <span className="font-mono text-xl">₹{finalTotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => setCurrentPage('checkout')}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-indigo-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[10px] text-slate-400 text-center space-y-1 pt-1">
                <div className="flex items-center justify-center gap-1.5 text-slate-600 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Secure SSL Checkout</span>
                </div>
                <p>Delivery in 2-4 days across Delhi, Kota, Pune & 19,000+ PINs</p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
