import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PAYMENT_METHODS = [
  {
    id: 'telebirr',
    name: 'Telebirr',
    subtitle: 'Pay seamlessly via app',
    icon: (
      <div className="w-10 h-10 rounded-lg bg-[#0066cc] flex items-center justify-center text-white font-bold text-xs leading-tight text-center">
        tele<br />birr
      </div>
    ),
  },
  {
    id: 'cbe',
    name: 'CBE Birr',
    subtitle: 'Direct mobile transfer',
    icon: (
      <div className="w-10 h-10 rounded-lg bg-[#1a5276] flex items-center justify-center text-white font-bold text-xs leading-tight text-center">
        CBE<br />Birr
      </div>
    ),
  },
  {
    id: 'card',
    name: 'Credit / Debit Card',
    subtitle: 'Visa, Mastercard',
    icon: (
      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
        <span className="material-symbols-outlined text-on-surface-variant">credit_card</span>
      </div>
    ),
  },
];

export default function Checkout() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState('telebirr');
  const [promoCode, setPromoCode] = useState('');

  const subtotal = 2500;
  const taxes = 150;
  const total = subtotal + taxes;

  return (
    <div className="bg-background text-on-background min-h-screen font-body-md antialiased pb-32">
      {/* Header */}
      <header className="flex items-center px-margin h-14 w-full bg-surface shadow-[0px_2px_8px_rgba(0,0,0,0.06)] sticky top-0 z-40 gap-md">
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="text-on-surface hover:opacity-80 transition-opacity active:scale-95 flex items-center justify-center p-2 -ml-2"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-headline-sm text-on-surface flex-1 text-center" style={{ fontFamily: 'Noto Serif, serif' }}>
          Checkout
        </h1>
        <div className="w-10" />
      </header>

      <main className="px-margin pt-lg space-y-xl max-w-2xl mx-auto">
        {/* Order Summary */}
        <section>
          <h2 className="font-headline-sm text-on-surface mb-md" style={{ fontFamily: 'Noto Serif, serif' }}>
            Order Summary
          </h2>
          <div className="bg-surface rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.06)] border border-surface-container overflow-hidden">
            <div className="h-40 w-full overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA31QCf4LT1eEr82yZMTkLFKlfHQrYiPTOnpEy_-_AB5QDSEVrEsJxjLQNCKNU2FviCCKvSvpoZUUm19qBqISQpFLRzUOjtm1IPK81moIk4U9tn6TdUq9D083Qk2yf_qEyOBkRDs8r3sasCwWqdWxinEwqCTC1PZ8IAfI4ftNOPC-IrDvQ8JJTev1vd51hgW-RGRJ-vF1H8-TslhnupOCuIfXSl5Ble1hQSZxj8I6E-6CdAjEJTS5G7FlDVix44PgYWKfnjbzQP7HhN"
                alt="Signature Habesha Braids"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-md">
              <h3 className="font-headline-sm text-primary mb-1" style={{ fontFamily: 'Noto Serif, serif' }}>
                Signature Habesha Braids
              </h3>
              <div className="flex items-center gap-1 text-on-surface-variant font-body-sm mb-3">
                <span className="material-symbols-outlined text-[16px]">person</span>
                by Aster Beauty Lounge
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant font-body-sm mb-4">
                <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                Oct 24, 2023 • 2:00 PM
              </div>
              <div className="border-t border-surface-variant pt-md space-y-2">
                <div className="flex justify-between font-body-md text-on-surface-variant">
                  <span>Service Subtotal</span>
                  <span>2,500 ETB</span>
                </div>
                <div className="flex justify-between font-body-md text-on-surface-variant">
                  <span>Taxes &amp; Fees</span>
                  <span>150 ETB</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-surface-variant">
                  <span className="font-label-lg text-label-lg text-on-surface">Total</span>
                  <span className="font-headline-sm text-primary" style={{ fontFamily: 'Noto Serif, serif' }}>
                    {total.toLocaleString()} ETB
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promo Code */}
        <section>
          <h2 className="font-headline-sm text-on-surface mb-md" style={{ fontFamily: 'Noto Serif, serif' }}>
            Promo Code
          </h2>
          <div className="flex gap-sm">
            <input
              className="flex-1 h-[52px] rounded-xl border border-outline-variant bg-surface px-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant transition-all"
              placeholder="Enter discount code"
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button className="h-[52px] px-lg rounded-xl border border-primary text-primary font-label-lg text-label-lg hover:bg-primary-fixed/30 transition-colors active:scale-95">
              APPLY
            </button>
          </div>
        </section>

        {/* Payment Method */}
        <section>
          <h2 className="font-headline-sm text-on-surface mb-md" style={{ fontFamily: 'Noto Serif, serif' }}>
            Payment Method
          </h2>
          <div className="space-y-sm">
            {PAYMENT_METHODS.map((method) => {
              const isSelected = selectedPayment === method.id;
              return (
                <label
                  key={method.id}
                  className={`flex items-center justify-between p-md rounded-xl border-2 cursor-pointer transition-all ${
                    isSelected
                      ? 'border-primary bg-primary-fixed/20'
                      : 'border-surface-variant bg-surface hover:bg-surface-container-low'
                  }`}
                >
                  <div className="flex items-center gap-md">
                    {method.icon}
                    <div>
                      <span className={`block font-label-lg text-label-lg ${isSelected ? 'text-primary' : 'text-on-surface'}`}>
                        {method.name}
                      </span>
                      <span className="block font-body-sm text-on-surface-variant">{method.subtitle}</span>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected ? 'border-primary bg-primary' : 'border-outline'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <input
                    type="radio"
                    name="payment_method"
                    value={method.id}
                    checked={isSelected}
                    onChange={() => setSelectedPayment(method.id)}
                    className="sr-only"
                  />
                </label>
              );
            })}
          </div>
        </section>

        {/* Trust badges */}
        <div className="flex justify-center gap-lg py-sm opacity-60">
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-[16px]">shield</span>
            <span className="font-label-md text-label-md">Secure, encrypted transaction</span>
          </div>
        </div>
      </main>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-margin bg-surface/95 backdrop-blur-md border-t border-surface-variant shadow-[0px_-4px_16px_rgba(0,0,0,0.08)] z-50">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => navigate('/home')}
            className="w-full h-[56px] rounded-xl bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-sm hover:bg-surface-tint active:scale-[0.98] transition-all shadow-[0px_4px_16px_rgba(155,0,68,0.25)] tracking-widest uppercase"
          >
            <span className="material-symbols-outlined text-[20px]">lock</span>
            Confirm Booking
          </button>
          <p className="text-center font-label-md text-label-md text-on-surface-variant mt-2 flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-[14px]">verified_user</span>
            Secure, encrypted transaction
          </p>
        </div>
      </div>
    </div>
  );
}
