import React from 'react';

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-stone-900">A Culinary Journey Like No Other</h2>
          <p className="text-stone-600 mb-6 leading-relaxed">
            Founded with a passion for authentic flavors and modern gastronomy, Savoria offers a warm, inviting ambiance coupled with dishes crafted from locally sourced, farm-fresh ingredients.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
              <h3 className="font-bold text-amber-800 text-lg mb-1">100% Fresh</h3>
              <p className="text-sm text-stone-600">Locally sourced organic produce daily.</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
              <h3 className="font-bold text-amber-800 text-lg mb-1">Master Chefs</h3>
              <p className="text-sm text-stone-600">Crafting magic with decades of experience.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
            alt="Restaurant interior"
            className="rounded-2xl shadow-md object-cover h-64 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
            alt="Signature dish"
            className="rounded-2xl shadow-md object-cover h-64 w-full mt-8"
          />
        </div>
      </div>
    </section>
  );
}