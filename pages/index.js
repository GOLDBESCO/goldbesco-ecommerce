import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { PaystackButton } from 'react-paystack';

const products = [
  {
    id: 1,
    name: "BESCO Fry Pan 1",
    image: "/images/pan-1.jpg",
    description: "Durable, Non-Stick, Easy to Clean",
    price: 45,
  },
  {
    id: 2,
    name: "BESCO Fry Pan 2",
    image: "/images/pan-2.jpg",
    description: "Heavy-duty with ceramic coating",
    price: 55,
  },
  {
    id: 3,
    name: "BESCO Fry Pan 3",
    image: "/images/pan-3.jpg",
    description: "Induction ready with heat-resistant handle",
    price: 60,
  },
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => setCart((prev) => [...prev, product]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const paystackKey = "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxx";

  const paystackConfig = {
    email: "buyer@example.com",
    amount: total * 100,
    metadata: {
      cartItems: cart.map((item) => item.name).join(", "),
      shipping: "Standard delivery within 3–5 days"
    },
    publicKey: paystackKey,
    text: `Pay ₦${total}`,
    onSuccess: () => alert("Payment successful! We’ll contact you shortly."),
    onClose: () => alert("Payment closed."),
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="bg-cover bg-center h-[90vh] flex items-center justify-center" style={{ backgroundImage: 'url(/images/hero-besco.jpg)' }}>
        <div className="bg-black/40 p-10 rounded-xl text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Premium Non-Stick Cookware</h1>
          <p className="text-lg mb-6">Official BESCO Products • Trusted Quality from China</p>
          <Button className="text-lg px-6 py-3">Shop Now</Button>
        </div>
      </section>

      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-xl transition duration-300">
              <CardContent className="p-4">
                <img src={product.image} alt={product.name} className="rounded-2xl h-60 w-full object-cover mb-4" />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-gray-800 font-bold mb-4">₦{product.price * 1000}</p>
                <Button className="w-full" onClick={() => addToCart(product)}>Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="text-center mt-10">
            <PaystackButton className="bg-green-600 text-white px-6 py-3 rounded-xl" {...paystackConfig} />
            <p className="text-sm text-gray-600 mt-2">Standard delivery: ₦2000 – Arrives in 3–5 business days</p>
          </div>
        )}
      </section>

      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">About BESCO</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700">
          BESCO is a leading Chinese manufacturer of non-stick aluminum cookware, supplying global markets
          with trusted quality, innovation, and durability.
        </p>
      </section>

      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Contact & Shipping Info</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-4">📞 Phone/WhatsApp: +234 801 234 5678</p>
          <p className="mb-4">📧 Email: cartersteve668@gmail.com</p>
          <p className="mb-4">📍 Delivery: Nationwide delivery in Nigeria (3–5 business days)</p>
          <p className="text-gray-700">We’ll confirm and contact you after payment.</p>
        </div>
      </section>
    </div>
  );
}
