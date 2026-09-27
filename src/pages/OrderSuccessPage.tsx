import React from 'react';
import { 
  CheckCircle2, 
  Truck, 
  ArrowRight, 
  ShoppingBag, 
  Award, 
  Download, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const OrderSuccessPage: React.FC = () => {
  const { lastOrder, setCurrentPage, addToast } = useApp();

  const handleDownloadInvoice = () => {
    addToast('Simulated tax invoice downloaded to device (PDF)', 'success');
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        
        {/* SUCCESS CARD */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm text-center">
          
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>

          <span className="text-[10px] font-mono uppercase font-bold tracking-widest bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full mb-3 inline-block">
            PAYMENT SUCCESSFUL
          </span>

          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 mb-2">
            Your Order Is Confirmed!
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-6">
            “Train the mind behind the marks.” We’re packing your study tools and dispatching to your address.
          </p>

          {/* ORDER & TRACKING META */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 max-w-lg mx-auto mb-8 text-left space-y-3">
            <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200">
              <span className="text-slate-500">Order Reference:</span>
              <span className="font-mono font-bold text-slate-900">
                {lastOrder?.id || 'SKILLSUTRA-IN-84920'}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200">
              <span className="text-slate-500">Estimated Delivery:</span>
              <span className="font-semibold text-emerald-700 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> 3-4 Working Days
              </span>
            </div>

            <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200">
              <span className="text-slate-500">Tracking Number:</span>
              <span className="font-mono font-bold text-indigo-950">
                {lastOrder?.trackingNumber || 'DELHIVERY-49201948'}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Total Amount Paid:</span>
              <span className="font-mono font-extrabold text-slate-900 text-sm">
                ₹{lastOrder?.total || 1198}
              </span>
            </div>
          </div>

          {/* SHIPPING DESTINATION NOTE */}
          {lastOrder?.shippingAddress && (
            <div className="text-xs text-slate-500 mb-8 max-w-sm mx-auto">
              Shipping to: <strong className="text-slate-800">{lastOrder.shippingAddress.fullName}</strong>, {lastOrder.shippingAddress.address}, {lastOrder.shippingAddress.city}, {lastOrder.shippingAddress.state} - {lastOrder.shippingAddress.pincode}
            </div>
          )}

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#141738] hover:bg-indigo-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Go to Student Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleDownloadInvoice}
              className="w-full sm:w-auto px-5 py-3.5 border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Invoice</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
