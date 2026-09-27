import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Truck, 
  Tag, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PRODUCTS } from '../../data/mockData';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
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

  if (!isCartDrawerOpen) return null;

  const freeShippingThreshold = 999;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingProgress = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  // Suggest a cross-sell product not already in cart
  const cartProductIds = cart.map(i => i.productId).filter(Boolean);
  const crossSellProduct = PRODUCTS.find(p => !cartProductIds.includes(p.id) && (p.id === 'prod-well-1' || p.id === 'prod-digital-1' || p.id === 'prod-desk-2')) || PRODUCTS[0];

  const handleCheckout = () => {
    setIsCartDrawerOpen(false);
    setCurrentPage('checkout');
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim()) {
      applyPromoCode(promoInput.trim());
      setPromoInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartDrawerOpen(false)}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* DRAWER HEADER */}
          <div className="p-4 sm:p-5 bg-[#141738] text-white flex items-center justify-between border-b border-indigo-950">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="font-heading font-bold text-lg text-white">Your Aspirant Bag</h2>
              <span className="bg-amber-400 text-indigo-950 font-extrabold text-xs px-2 py-0.5 rounded-full">
                {cart.reduce((a, c) => a + c.quantity, 0)}
              </span>
            </div>
            <button
              onClick={() => setIsCartDrawerOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-indigo-900/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* FREE SHIPPING PROGRESS BAR */}
          <div className="bg-amber-50/80 border-b border-amber-200/60 px-5 py-3">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <div className="flex items-center gap-1.5 font-medium text-slate-800">
                <Truck className="w-4 h-4 text-amber-600" />
                {remainingForFreeShipping > 0 ? (
                  <span>
                    You’re <strong className="text-amber-700">₹{remainingForFreeShipping}</strong> away from <strong className="text-indigo-900 font-bold">FREE SHIPPING</strong>!
                  </span>
                ) : (
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    🎉 You have unlocked FREE Pan-India Shipping!
                  </span>
                )}
              </div>
            </div>
            <div className="w-full bg-amber-200/50 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* CART ITEMS LIST */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-slate-100 space-y-4">
            {cart.length === 0 ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="font-heading font-semibold text-slate-800 text-lg mb-1">Your bag is empty</h3>
                <p className="text-slate-500 text-sm max-w-xs mb-6">
                  Gear up your desk setup with our focus kits, notebooks, and speed courses.
                </p>
                <button
                  onClick={() => {
                    setIsCartDrawerOpen(false);
                    setCurrentPage('shop');
                  }}
                  className="px-6 py-2.5 bg-[#141738] text-white font-medium rounded-xl text-sm hover:bg-indigo-900 transition-colors"
                >
                  Explore Store
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3.5 pt-3 first:pt-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-xl object-cover border border-slate-200 shrink-0 bg-slate-50"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 
                              onClick={() => {
                                if (item.productId) {
                                  setIsCartDrawerOpen(false);
                                  navigateToProduct(item.productId);
                                }
                              }}
                              className="font-medium text-slate-900 text-sm hover:text-amber-600 cursor-pointer line-clamp-1"
                            >
                              {item.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-bold text-slate-900 font-mono">
                              ₹{item.price}
                            </span>
                            {item.originalPrice && item.originalPrice > item.price && (
                              <span className="text-[11px] text-slate-400 line-through font-mono">
                                ₹{item.originalPrice}
                              </span>
                            )}
                            {item.category && (
                              <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                                {item.category}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 hover:bg-slate-200 text-slate-600 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-semibold text-slate-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 hover:bg-slate-200 text-slate-600 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-xs font-bold text-indigo-950 font-mono">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* SMART UP-SELL / CROSS-SELL */}
                {crossSellProduct && (
                  <div className="pt-4 mt-4">
                    <div className="p-3 bg-indigo-50/70 border border-indigo-100 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-500" /> Complete Your Study Setup
                        </span>
                        <span className="text-[11px] text-amber-700 font-semibold font-mono">
                          ₹{crossSellProduct.price}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <img 
                          src={crossSellProduct.image} 
                          alt={crossSellProduct.name}
                          className="w-12 h-12 rounded-lg object-cover border border-indigo-200" 
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="text-xs font-semibold text-slate-900 truncate">
                            {crossSellProduct.name}
                          </h5>
                          <p className="text-[11px] text-slate-500 line-clamp-1">
                            {crossSellProduct.shortBenefit}
                          </p>
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
                          className="shrink-0 px-3 py-1.5 bg-[#141738] hover:bg-amber-500 hover:text-indigo-950 text-white text-xs font-bold rounded-lg transition-colors"
                        >
                          Add for ₹{crossSellProduct.price}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* DRAWER FOOTER / CHECKOUT */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 space-y-3">
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Discount code (e.g. SKILLGYM)"
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-amber-500 uppercase font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-slate-800 text-white text-xs font-medium rounded-lg hover:bg-slate-900 transition-colors"
                >
                  Apply
                </button>
              </form>

              {appliedPromo && (
                <div className="flex items-center justify-between text-xs bg-amber-50 text-amber-800 px-3 py-1 rounded-md border border-amber-200">
                  <span className="flex items-center gap-1 font-mono font-medium">
                    <Tag className="w-3 h-3 text-amber-600" /> {appliedPromo} applied
                  </span>
                  <span className="font-semibold">-₹{discountAmount}</span>
                </div>
              )}

              {/* Cost Summary Breakdown */}
              <div className="space-y-1 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-slate-800">₹{cartSubtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Discount (10%)</span>
                    <span className="font-mono">-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-mono">
                    {shippingFee === 0 ? (
                      <span className="text-emerald-600 font-bold">FREE</span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Amount</span>
                  <span className="font-mono text-base text-indigo-950 font-extrabold">₹{finalTotal}</span>
                </div>
              </div>

              {/* Checkout Action */}
              <button
                onClick={handleCheckout}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-indigo-950 font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Secure Checkout • Easy 7-Day Returns</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
