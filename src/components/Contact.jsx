import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [bookingStatus, setBookingStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingStatus('Table reserved successfully! We look forward to seeing you.');
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Visit & Connect</h2>
          <div className="space-y-4 mb-8">
            <div>
              <h3 className="font-bold text-lg">📍 Location</h3>
              <p className="text-stone-400 text-sm">Main Road, Thampanoor, Trivandrum, Kerala 695001</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">🕒 Opening Hours</h3>
              <p className="text-stone-400 text-sm">Monday – Friday: 11:00 AM – 10:30 PM</p>
              <p className="text-stone-400 text-sm">Saturday – Sunday: 10:00 AM – 11:30 PM</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">📞 Contact Details</h3>
              <p className="text-stone-400 text-sm">Phone: 7904791956</p>
              <p className="text-stone-400 text-sm">Email: lijijomijomi@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white text-stone-900 p-8 rounded-2xl shadow-sm border border-stone-200">
          <h3 className="text-2xl font-bold mb-4">Reserve a Table</h3>
          {bookingStatus ? (
            <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl font-medium">
              {bookingStatus}
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 text-stone-900" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 6235005440" 
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 text-stone-900" 
                />
              </div>
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl transition">
                Book Table Now
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}