// src/app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="bg-gray-50 py-16 rounded-lg text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Welcome to E-Shop</h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover amazing products at unbeatable prices.
          </p>
          <Link href="/products" className="btn btn-primary text-lg px-8 py-3">
            Shop Now
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your orders delivered quickly and reliably.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Quality Products</h3>
            <p className="text-gray-600">
              We source only the best products for our customers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">24/7 Support</h3>
            <p className="text-gray-600">
              Our customer service team is always ready to help.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
