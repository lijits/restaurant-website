import React from 'react';

export default function Menu() {
  const dishes = [
    {
      name: "Truffle Woodfire Pizza",
      price: "$18.99",
      desc: "Hand-tossed dough topped with wild mushrooms, black truffle oil, and artisanal mozzarella.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Prime Ribeye Steak",
      price: "$32.50",
      desc: "Grass-fed beef grilled to perfection, served with garlic herb butter and roasted asparagus.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Savoria's Sadhya Feast",
      price: "$24.99",
      desc: "Authentic multi-course traditional feast served on a banana leaf, featuring over 20 unique vegetarian delicacies.",
      // Updated with a stable, working image link
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="menu" className="bg-stone-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Our Popular Dishes</h2>
          <p className="text-stone-600 max-w-xl mx-auto">
            Explore our hand-picked culinary highlights beloved by our guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={dish.image} alt={dish.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">{dish.name}</h3>
                  <span className="text-amber-700 font-bold">{dish.price}</span>
                </div>
                <p className="text-stone-600 text-sm mb-4">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}