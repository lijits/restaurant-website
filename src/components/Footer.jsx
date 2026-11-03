import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-8 text-center text-sm space-y-2">
      <p>&copy; {new Date().getFullYear()} Savoria Restaurant. All rights reserved.</p>
      <p className="text-stone-500 text-xs">
        Designed & Developed by <span className="text-amber-500 font-medium">Liji T.S.</span>
      </p>
    </footer>
  );
}