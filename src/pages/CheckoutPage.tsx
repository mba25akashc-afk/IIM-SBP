import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Lock, 
  CreditCard, 
  Smartphone, 
  Building2, 
  Wallet, 
  Check, 
  ArrowLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CheckoutPage: React.FC = () => {
  const { 
    cart, 
    cartSubtotal, 
    discountAmount, 
    shippingFee, 
    finalTotal, 
    completeCheckout, 
    setCurrentPage,
    userProfile 
  } = useApp();

  // Form Fields
  const [formData, setFormData] = useState({
    fullName: userProfile.name || 'Akash Sharma',
    mobile: '9876543210',
    email: userProfile.email || 'akash.aspirant@iims.ac.in',
    address: 'Flat 302, Green Glen Residency, Near Library Hub',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411038'
  });

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'cod'>('upi');
  const [upiId, setUpiId] = useState('akash@okhdfcbank');
  const [isProcessing, setIsProcessing] = useState(false);

  const indianStates = [
    'Maharashtra', 'Delhi', 'Uttar Pradesh', 'Karnataka', 'Tamil Nadu', 
    'West Bengal', 'Bihar', 'Rajasthan', 'Gujarat', 'Madhya Pradesh', 
    'Telangana', 'Kerala', 'Punjab', 'Haryana', 'Odisha', 'Jharkhand'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      completeCheckout(formData, paymentMethod.toUpperCase());
      setIsProcessing(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] pb-24">
      
      {/* HEADER */}
      <div className="bg-[#141738] text-white py-6 px-4 sm:px-6 lg:px-8 border-b border-indigo-950">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentPage('cart')}
              className="p-1.5 rounded-lg bg-indigo-900/60 hover:bg-indigo-900 text-slate-300 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="font-heading font-extrabold text-xl text-white">
              Skill<span className="text-amber-400">Sutra</span> Checkout
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>256-Bit Encrypted</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: SHIPPING & PAYMENT DETAILS (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* STEP 1: DELIVERY ADDRESS */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h2 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-950 text-white text-xs flex items-center justify-center font-bold">
                    1
                  </span>
                  Aspirant Delivery Address
                </h2>
                <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-semibold">
                  Pan-India Fast Track
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number (For Courier OTP)</label>
                  <input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono focus:outline-hidden focus:border-amber-400"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-slate-700 block mb-1">Email Address (For Invoices & Track Link)</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-amber-400"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-slate-700 block mb-1">Hostel / Flat / House Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">City / Coaching Hub</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">State</label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-amber-400"
                  >
                    {indianStates.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">PIN Code</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono focus:outline-hidden focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* STEP 2: PAYMENT METHOD (SIMULATED INDIAN PAYMENT MODES) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h2 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-950 text-white text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  Indian Payment Options
                </h2>
                <span className="text-[10px] text-slate-400 uppercase font-mono font-bold">
                  Simulated Demo Flow
                </span>
              </div>

              {/* PAYMENT OPTION TABS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'upi', label: 'UPI / QR', icon: <Smartphone className="w-4 h-4" /> },
                  { id: 'card', label: 'Cards', icon: <CreditCard className="w-4 h-4" /> },
                  { id: 'netbanking', label: 'NetBanking', icon: <Building2 className="w-4 h-4" /> },
                  { id: 'cod', label: 'Cash on Del.', icon: <Wallet className="w-4 h-4" /> }
                ].map((pm) => (
                  <button
                    key={pm.id}
                    type="button"
                    onClick={() => setPaymentMethod(pm.id as any)}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                      paymentMethod === pm.id
                        ? 'border-indigo-950 bg-indigo-50/80 text-indigo-950 shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {pm.icon}
                    <span>{pm.label}</span>
                  </button>
                ))}
              </div>

              {/* PAYMENT METHOD DETAILS */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                {paymentMethod === 'upi' && (
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-slate-800 block">
                      Pay via GPay, PhonePe, Paytm or BHIM UPI
                    </span>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@upi"
                        className="flex-1 text-xs p-2.5 bg-white border border-slate-300 rounded-xl font-mono focus:outline-hidden focus:border-amber-400"
                      />
                      <button
                        type="button"
                        className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-bold rounded-xl"
                      >
                        Verify
                      </button>
                    </div>
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500">
                      <span className="font-semibold">Supported:</span>
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Google Pay</span>
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-200">PhonePe</span>
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Paytm</span>
                    </div>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="space-y-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">Card Number</label>
                      <input
                        type="text"
                        defaultValue="4111 •••• •••• 8492"
                        className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">Expiry (MM/YY)</label>
                        <input
                          type="text"
                          defaultValue="08/29"
                          className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">CVV</label>
                        <input
                          type="password"
                          defaultValue="782"
                          className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'netbanking' && (
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-700 block">Select Popular Bank</span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      {['HDFC Bank', 'State Bank of India', 'ICICI Bank', 'Axis Bank'].map((b) => (
                        <div key={b} className="p-2.5 bg-white border border-slate-200 rounded-lg text-center font-medium text-slate-800">
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {paymentMethod === 'cod' && (
                  <div className="text-xs text-slate-700">
                    <p className="font-semibold text-slate-900 mb-1">Cash on Delivery Available</p>
                    <p>Pay cash or scan QR at your doorstep with Delhivery courier executive.</p>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* RIGHT: ORDER SUMMARY (5 COLS) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5 sticky top-24">
            <h3 className="font-heading font-extrabold text-base text-slate-900 pb-3 border-b border-slate-100">
              Order Summary ({cart.length} Items)
            </h3>

            {/* MINI ITEM LIST */}
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-xs text-slate-900 truncate">{item.name}</h5>
                    <span className="text-[11px] text-slate-500">Qty: {item.quantity}</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-900 shrink-0">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            {/* COST BREAKDOWN */}
            <div className="space-y-2 text-xs text-slate-600 pt-4 border-t border-slate-100">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono font-bold text-slate-900">₹{cartSubtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Special Discount</span>
                  <span className="font-mono">-₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Express Shipping</span>
                <span className="font-mono font-bold text-slate-900">
                  {shippingFee === 0 ? <span className="text-emerald-600">FREE</span> : `₹${shippingFee}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-indigo-950 pt-3 border-t border-slate-200">
                <span>Total Payable</span>
                <span className="font-mono text-2xl">₹{finalTotal}</span>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isProcessing || cart.length === 0}
              className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-indigo-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
            >
              {isProcessing ? (
                <span>Simulating Payment Gateway...</span>
              ) : (
                <>
                  <span>Pay ₹{finalTotal} & Confirm Order</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="text-[11px] text-slate-500 text-center space-y-1 pt-2">
              <div className="flex items-center justify-center gap-1.5 text-emerald-700 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Simulated Checkout • Instant Confirmation</span>
              </div>
              <p>Demo orders are tracked live in your Student Dashboard.</p>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
