import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ShieldCheck, CreditCard, MapPin, Package, Check } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { trackEvent } from "../lib/analytics";

interface CheckoutProps {
  onBack: () => void;
  onComplete: () => void;
}

export function Checkout({ onBack, onComplete }: CheckoutProps) {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">("shipping");
  const [orderNumber, setOrderNumber] = useState("");

  // Form states
  const [shippingData, setShippingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
  });

  const shippingCost = 0; // Free tactical shipping
  const tax = Math.round(totalPrice * 0.08); // 8% tax
  const finalTotal = totalPrice + shippingCost + tax;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("checkout_shipping_complete", { 
      total: finalTotal,
      items_count: items.length 
    });
    setStep("payment");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderNumber = `ET-${Date.now().toString(36).toUpperCase()}`;
    setOrderNumber(newOrderNumber);
    trackEvent("purchase_complete", {
      transaction_id: newOrderNumber,
      value: finalTotal,
      currency: "USD",
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        category: item.category,
        quantity: item.quantity,
        price: parseInt(item.price.replace("$", ""))
      }))
    });
    setStep("confirmation");
    clearCart();
  };

  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      {/* Header */}
      <div className="bg-zinc-900 border-b-4 border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-400 hover:text-orange-600 transition-colors mb-6"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm">Return to Cart</span>
          </motion.button>

          <h1 className="text-zinc-100 mb-3 uppercase tracking-wider">
            Mission Checkout
          </h1>
          <div className="h-1 w-20 bg-orange-600" />
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-zinc-900/50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {[
              { key: "shipping", label: "Shipping", icon: MapPin },
              { key: "payment", label: "Payment", icon: CreditCard },
              { key: "confirmation", label: "Confirmed", icon: ShieldCheck },
            ].map((s, index) => {
              const Icon = s.icon;
              const isActive = step === s.key;
              const isComplete = 
                (s.key === "shipping" && (step === "payment" || step === "confirmation")) ||
                (s.key === "payment" && step === "confirmation");

              return (
                <div key={s.key} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                        isComplete
                          ? "bg-green-600 border-green-600"
                          : isActive
                          ? "bg-orange-600 border-orange-600"
                          : "bg-zinc-800 border-zinc-700"
                      }`}
                    >
                      {isComplete ? (
                        <Check className="w-6 h-6 text-zinc-950" />
                      ) : (
                        <Icon className={`w-6 h-6 ${isActive ? "text-zinc-950" : "text-zinc-500"}`} />
                      )}
                    </div>
                    <span
                      className={`text-xs uppercase tracking-wide mt-2 ${
                        isActive ? "text-orange-600" : "text-zinc-500"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  {index < 2 && (
                    <div
                      className={`w-24 h-1 mx-4 transition-colors ${
                        isComplete ? "bg-green-600" : "bg-zinc-800"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {step === "shipping" && (
                <ShippingForm
                  data={shippingData}
                  onChange={setShippingData}
                  onSubmit={handleShippingSubmit}
                />
              )}
              {step === "payment" && (
                <PaymentForm
                  data={paymentData}
                  onChange={setPaymentData}
                  onSubmit={handlePaymentSubmit}
                  onBack={() => setStep("shipping")}
                />
              )}
              {step === "confirmation" && (
                <ConfirmationScreen
                  orderNumber={orderNumber}
                  email={shippingData.email}
                  onComplete={onComplete}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          {step !== "confirmation" && (
            <div className="lg:col-span-1">
              <OrderSummary items={items} totalPrice={totalPrice} tax={tax} finalTotal={finalTotal} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ShippingForm({ data, onChange, onSubmit }: any) {
  return (
    <motion.form
      className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 space-y-6"
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-zinc-100 text-lg font-semibold">
        Shipping Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-zinc-400 text-sm uppercase tracking-wide">
            First Name
          </label>
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => onChange({ ...data, firstName: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded focus:outline-none focus:border-orange-600 transition-colors"
            required
          />
        </div>
        <div>
          <label className="text-zinc-400 text-sm uppercase tracking-wide">
            Last Name
          </label>
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => onChange({ ...data, lastName: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded focus:outline-none focus:border-orange-600 transition-colors"
            required
          />
        </div>
      </div>

      <div>
        <label className="text-zinc-400 text-sm uppercase tracking-wide">
          Email Address
        </label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => onChange({ ...data, email: e.target.value })}
          className="w-full bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded focus:outline-none focus:border-orange-600 transition-colors"
          required
        />
      </div>

      <div>
        <label className="text-zinc-400 text-sm uppercase tracking-wide">
          Address
        </label>
        <input
          type="text"
          value={data.address}
          onChange={(e) => onChange({ ...data, address: e.target.value })}
          className="w-full bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded focus:outline-none focus:border-orange-600 transition-colors"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-zinc-400 text-sm uppercase tracking-wide">
            City
          </label>
          <input
            type="text"
            value={data.city}
            onChange={(e) => onChange({ ...data, city: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded focus:outline-none focus:border-orange-600 transition-colors"
            required
          />
        </div>
        <div>
          <label className="text-zinc-400 text-sm uppercase tracking-wide">
            State
          </label>
          <input
            type="text"
            value={data.state}
            onChange={(e) => onChange({ ...data, state: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded focus:outline-none focus:border-orange-600 transition-colors"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-zinc-400 text-sm uppercase tracking-wide">
            ZIP Code
          </label>
          <input
            type="text"
            value={data.zip}
            onChange={(e) => onChange({ ...data, zip: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded focus:outline-none focus:border-orange-600 transition-colors"
            required
          />
        </div>
        <div>
          <label className="text-zinc-400 text-sm uppercase tracking-wide">
            Country
          </label>
          <select
            value={data.country}
            onChange={(e) => onChange({ ...data, country: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded focus:outline-none focus:border-orange-600 transition-colors"
            required
          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
            {/* Add more countries as needed */}
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <motion.button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 text-zinc-950 px-6 py-3 uppercase tracking-wider transition-colors rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue to Payment
        </motion.button>
      </div>
    </motion.form>
  );
}

function PaymentForm({ data, onChange, onSubmit, onBack }: any) {
  return (
    <motion.form
      className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 space-y-6"
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-zinc-100 text-lg font-semibold">
        Payment Information
      </h2>

      <div>
        <label className="text-zinc-400 text-sm uppercase tracking-wide">
          Card Number
        </label>
        <input
          type="text"
          value={data.cardNumber}
          onChange={(e) => onChange({ ...data, cardNumber: e.target.value })}
          className="w-full bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded focus:outline-none focus:border-orange-600 transition-colors"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-zinc-400 text-sm uppercase tracking-wide">
            Expiry Date
          </label>
          <input
            type="text"
            value={data.expiry}
            onChange={(e) => onChange({ ...data, expiry: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded focus:outline-none focus:border-orange-600 transition-colors"
            placeholder="MM/YY"
            required
          />
        </div>
        <div>
          <label className="text-zinc-400 text-sm uppercase tracking-wide">
            CVV
          </label>
          <input
            type="text"
            value={data.cvv}
            onChange={(e) => onChange({ ...data, cvv: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded focus:outline-none focus:border-orange-600 transition-colors"
            required
          />
        </div>
      </div>

      <div>
        <label className="text-zinc-400 text-sm uppercase tracking-wide">
          Name on Card
        </label>
        <input
          type="text"
          value={data.nameOnCard}
          onChange={(e) => onChange({ ...data, nameOnCard: e.target.value })}
          className="w-full bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded focus:outline-none focus:border-orange-600 transition-colors"
          required
        />
      </div>

      <div className="flex justify-between">
        <motion.button
          type="button"
          onClick={onBack}
          className="text-zinc-400 hover:text-orange-600 transition-colors"
        >
          &larr; Back to Shipping
        </motion.button>
        <motion.button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 text-zinc-950 px-6 py-3 uppercase tracking-wider transition-colors rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Complete Order
        </motion.button>
      </div>
    </motion.form>
  );
}

function ConfirmationScreen({ orderNumber, email, onComplete }: any) {
  return (
    <motion.div
      className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-zinc-100 text-lg font-semibold">
        Order Confirmation
      </h2>

      <div className="text-zinc-300">
        <p>
          Thank you for your order! Your mission-critical gear is being prepared for shipment.
        </p>
        <p className="mt-4">
          Order Number:{" "}
          <span className="text-orange-600 font-semibold">{orderNumber}</span>
        </p>
        <p>
          A confirmation email has been sent to:{" "}
          <span className="text-orange-600 font-semibold">{email}</span>
        </p>
      </div>

      <motion.button
        onClick={onComplete}
        className="bg-orange-600 hover:bg-orange-700 text-zinc-950 px-6 py-3 uppercase tracking-wider transition-colors rounded-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Continue to Mission Base
      </motion.button>
    </motion.div>
  );
}

function OrderSummary({ items, totalPrice, tax, finalTotal }: any) {
  return (
    <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
      <h2 className="text-zinc-100 text-lg font-semibold mb-4">
        Order Summary
      </h2>

      <div className="space-y-4">
        {items.map((item: any) => (
          <div key={item.id} className="flex justify-between">
            <div>
              <p className="text-zinc-100">{item.name}</p>
              <p className="text-zinc-500 text-sm">
                {item.quantity} x {item.price}
              </p>
            </div>
            <div className="text-zinc-100">
              ${(parseInt(item.price.replace("$", "")) * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}

        <div className="border-t border-zinc-700 pt-4">
          <div className="flex justify-between text-zinc-300 text-sm uppercase">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-zinc-300 text-sm uppercase">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-zinc-300 text-sm uppercase">
            <span>Tax (approx.)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex justify-between text-zinc-100 font-semibold">
          <span>Total</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}