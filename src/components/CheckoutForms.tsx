import { motion } from "motion/react";
import { ArrowRight, Lock, Shield, CheckCircle } from "lucide-react";

interface ShippingFormProps {
  data: any;
  onChange: (data: any) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ShippingForm({ data, onChange, onSubmit }: ShippingFormProps) {
  return (
    <motion.div
      key="shipping"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-zinc-900 border border-zinc-800 rounded-lg p-8"
    >
      <h2 className="text-zinc-100 uppercase tracking-wider mb-6">
        Deployment Coordinates
      </h2>
      <div className="h-1 w-20 bg-orange-600 mb-8" />

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-zinc-400 text-sm uppercase tracking-wide mb-2">
              First Name *
            </label>
            <input
              type="text"
              required
              value={data.firstName}
              onChange={(e) => onChange({ ...data, firstName: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 text-zinc-100 px-4 py-3 rounded focus:outline-none focus:border-orange-600 transition-colors"
            />
          </div>
          <div>
            <label className="block text-zinc-400 text-sm uppercase tracking-wide mb-2">
              Last Name *
            </label>
            <input
              type="text"
              required
              value={data.lastName}
              onChange={(e) => onChange({ ...data, lastName: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 text-zinc-100 px-4 py-3 rounded focus:outline-none focus:border-orange-600 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-zinc-400 text-sm uppercase tracking-wide mb-2">
            Email *
          </label>
          <input
            type="email"
            required
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 text-zinc-100 px-4 py-3 rounded focus:outline-none focus:border-orange-600 transition-colors"
          />
        </div>

        <div>
          <label className="block text-zinc-400 text-sm uppercase tracking-wide mb-2">
            Address *
          </label>
          <input
            type="text"
            required
            value={data.address}
            onChange={(e) => onChange({ ...data, address: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 text-zinc-100 px-4 py-3 rounded focus:outline-none focus:border-orange-600 transition-colors"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-zinc-400 text-sm uppercase tracking-wide mb-2">
              City *
            </label>
            <input
              type="text"
              required
              value={data.city}
              onChange={(e) => onChange({ ...data, city: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 text-zinc-100 px-4 py-3 rounded focus:outline-none focus:border-orange-600 transition-colors"
            />
          </div>
          <div>
            <label className="block text-zinc-400 text-sm uppercase tracking-wide mb-2">
              State *
            </label>
            <input
              type="text"
              required
              value={data.state}
              onChange={(e) => onChange({ ...data, state: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 text-zinc-100 px-4 py-3 rounded focus:outline-none focus:border-orange-600 transition-colors"
            />
          </div>
          <div>
            <label className="block text-zinc-400 text-sm uppercase tracking-wide mb-2">
              ZIP *
            </label>
            <input
              type="text"
              required
              value={data.zip}
              onChange={(e) => onChange({ ...data, zip: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 text-zinc-100 px-4 py-3 rounded focus:outline-none focus:border-orange-600 transition-colors"
            />
          </div>
        </div>

        <motion.button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-zinc-950 px-8 py-4 uppercase tracking-wider flex items-center justify-center gap-2 transition-colors rounded-lg mt-8"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Continue to Payment</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </form>
    </motion.div>
  );
}

interface PaymentFormProps {
  data: any;
  onChange: (data: any) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}

export function PaymentForm({ data, onChange, onSubmit, onBack }: PaymentFormProps) {
  return (
    <motion.div
      key="payment"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-zinc-900 border border-zinc-800 rounded-lg p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <Shield className="w-6 h-6 text-green-500" />
        <h2 className="text-zinc-100 uppercase tracking-wider">
          Secure Payment
        </h2>
      </div>
      <div className="h-1 w-20 bg-orange-600 mb-8" />

      <div className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-lg mb-8">
        <div className="flex items-center gap-2 text-zinc-400 text-sm">
          <Lock className="w-4 h-4 text-green-500" />
          <span className="uppercase tracking-wide">
            256-bit Military-Grade Encryption
          </span>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label className="block text-zinc-400 text-sm uppercase tracking-wide mb-2">
            Card Number *
          </label>
          <input
            type="text"
            required
            placeholder="1234 5678 9012 3456"
            value={data.cardNumber}
            onChange={(e) => onChange({ ...data, cardNumber: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 text-zinc-100 px-4 py-3 rounded focus:outline-none focus:border-orange-600 transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-zinc-400 text-sm uppercase tracking-wide mb-2">
              Expiry (MM/YY) *
            </label>
            <input
              type="text"
              required
              placeholder="12/25"
              value={data.expiry}
              onChange={(e) => onChange({ ...data, expiry: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 text-zinc-100 px-4 py-3 rounded focus:outline-none focus:border-orange-600 transition-colors"
            />
          </div>
          <div>
            <label className="block text-zinc-400 text-sm uppercase tracking-wide mb-2">
              CVV *
            </label>
            <input
              type="text"
              required
              placeholder="123"
              value={data.cvv}
              onChange={(e) => onChange({ ...data, cvv: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 text-zinc-100 px-4 py-3 rounded focus:outline-none focus:border-orange-600 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-zinc-400 text-sm uppercase tracking-wide mb-2">
            Name on Card *
          </label>
          <input
            type="text"
            required
            value={data.nameOnCard}
            onChange={(e) => onChange({ ...data, nameOnCard: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 text-zinc-100 px-4 py-3 rounded focus:outline-none focus:border-orange-600 transition-colors"
          />
        </div>

        <div className="flex gap-4 mt-8">
          <motion.button
            type="button"
            onClick={onBack}
            className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-8 py-4 uppercase tracking-wider transition-colors rounded-lg"
            whileTap={{ scale: 0.98 }}
          >
            Back
          </motion.button>
          <motion.button
            type="submit"
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-zinc-950 px-8 py-4 uppercase tracking-wider flex items-center justify-center gap-2 transition-colors rounded-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Complete Order</span>
            <Shield className="w-5 h-5" />
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}

interface ConfirmationScreenProps {
  orderNumber: string;
  email: string;
  onComplete: () => void;
}

export function ConfirmationScreen({ orderNumber, email, onComplete }: ConfirmationScreenProps) {
  return (
    <motion.div
      key="confirmation"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-zinc-900 border border-zinc-800 rounded-lg p-12 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle className="w-12 h-12 text-zinc-950" />
      </motion.div>

      <h2 className="text-zinc-100 text-2xl uppercase tracking-wider mb-2">
        Mission Confirmed
      </h2>
      <p className="text-zinc-400 mb-8">
        Your tactical equipment has been deployed
      </p>

      <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6 mb-8">
        <p className="text-zinc-500 text-sm uppercase tracking-wide mb-2">
          Order Number
        </p>
        <p className="text-orange-600 text-2xl font-mono mb-4">
          {orderNumber}
        </p>
        <p className="text-zinc-500 text-sm">
          Confirmation sent to: <span className="text-zinc-300">{email}</span>
        </p>
      </div>

      <div className="bg-zinc-800/30 border-l-4 border-orange-600 p-4 mb-8 text-left">
        <p className="text-zinc-400 text-sm leading-relaxed">
          Your order is being prepared for shipment. You will receive tracking information within 24 hours.
          All tactical gear comes with our 30-Day Field Test Guarantee.
        </p>
      </div>

      <motion.button
        onClick={onComplete}
        className="bg-orange-600 hover:bg-orange-700 text-zinc-950 px-8 py-4 uppercase tracking-wider transition-colors rounded-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Return to Base
      </motion.button>
    </motion.div>
  );
}

interface OrderSummaryProps {
  items: any[];
  totalPrice: number;
  tax: number;
  finalTotal: number;
}

export function OrderSummary({ items, totalPrice, tax, finalTotal }: OrderSummaryProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 sticky top-24">
      <h3 className="text-zinc-100 uppercase tracking-wider mb-4">
        Mission Summary
      </h3>
      <div className="h-1 w-16 bg-orange-600 mb-6" />

      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3">
            <div className="w-16 h-16 bg-zinc-800 rounded overflow-hidden flex-shrink-0">
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-zinc-300 text-sm truncate">{item.name}</p>
              <p className="text-zinc-500 text-xs">Qty: {item.quantity}</p>
              <p className="text-orange-600 text-sm mt-1">
                ${(parseInt(item.price.replace("$", "")) * item.quantity).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-zinc-800 pt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-zinc-500 uppercase tracking-wide">Subtotal</span>
          <span className="text-zinc-300">${totalPrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-zinc-500 uppercase tracking-wide">Shipping</span>
          <span className="text-green-500">FREE</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-zinc-500 uppercase tracking-wide">Tax</span>
          <span className="text-zinc-300">${tax.toLocaleString()}</span>
        </div>
        <div className="border-t border-zinc-800 pt-3 flex justify-between">
          <span className="text-zinc-100 uppercase tracking-wide">Total</span>
          <span className="text-orange-600 text-xl">${finalTotal.toLocaleString()}</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-zinc-800/30 border border-zinc-700 rounded">
        <div className="flex items-center gap-2 text-green-500 text-sm mb-2">
          <Shield className="w-4 h-4" />
          <span className="uppercase tracking-wide">Secured Checkout</span>
        </div>
        <p className="text-zinc-500 text-xs">
          30-Day Field Test Guarantee • Free Returns
        </p>
      </div>
    </div>
  );
}
