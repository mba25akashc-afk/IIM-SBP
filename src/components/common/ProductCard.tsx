import React, { useState } from 'react';
import { Star, ShoppingBag, Heart, Check, Eye } from 'lucide-react';
import { Product } from '../../types';
import { useApp } from '../../context/AppContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart, navigateToProduct, toggleWishlist, isInWishlist } = useApp();
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      type: 'product',
      category: product.category
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const getBadgeStyle = (badge?: string) => {
    switch (badge) {
      case 'BESTSELLER':
        return 'bg-amber-500 text-indigo-950 font-extrabold';
      case 'NEW DROP':
        return 'bg-indigo-900 text-white font-bold';
      case 'EXAM SEASON':
        return 'bg-rose-600 text-white font-bold';
      case 'DIGITAL':
        return 'bg-emerald-600 text-white font-bold';
      case 'LIMITED DROP':
        return 'bg-amber-400 text-indigo-950 font-black animate-pulse';
      default:
        return 'bg-slate-800 text-white font-medium';
    }
  };

  const displayImage = isHovered && product.alternateImage ? product.alternateImage : product.image;

  return (
    <div
      onClick={() => navigateToProduct(product.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
    >
      {/* BADGE & WISHLIST OVERLAYS */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {product.badge && (
          <span className={`text-[10px] tracking-wider uppercase px-2 py-0.5 rounded shadow-sm ${getBadgeStyle(product.badge)}`}>
            {product.badge}
          </span>
        )}
      </div>

      <button
        onClick={handleWishlistToggle}
        className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
          isFavorited
            ? 'bg-rose-50 text-rose-600 shadow-sm'
            : 'bg-white/80 text-slate-400 hover:text-rose-500 hover:bg-white'
        }`}
        title="Save to wishlist"
      >
        <Heart className={`w-4 h-4 ${isFavorited ? 'fill-rose-500' : ''}`} />
      </button>

      {/* IMAGE CONTAINER WITH HOVER ALTERNATE */}
      <div className="relative aspect-4/3 sm:aspect-square bg-slate-100 overflow-hidden">
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Quick View Button overlay on hover */}
        <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none sm:pointer-events-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateToProduct(product.id);
            }}
            className="px-4 py-2 bg-white/95 text-indigo-950 font-bold text-xs rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-amber-600" />
            <span>View Details</span>
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Skill tag */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
            <span className="uppercase font-semibold tracking-wider text-amber-700">
              {product.category}
            </span>
            <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">
              {product.skill}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 line-clamp-1 group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>

          {/* One-Line Benefit */}
          <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
            {product.shortBenefit}
          </p>
        </div>

        {/* Rating & Pricing Row */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="flex items-center justify-between mb-3">
            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="font-mono font-extrabold text-base sm:text-lg text-slate-900">
                ₹{product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="font-mono text-xs text-slate-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-xs">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span className="font-bold text-slate-800">{product.rating}</span>
              <span className="text-slate-400 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Action Buttons: Quick Add */}
          <button
            onClick={handleQuickAdd}
            className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              justAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-[#141738] hover:bg-amber-400 hover:text-indigo-950 text-white shadow-xs'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Quick Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
