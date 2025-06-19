import React from 'react'

export default function Background({ isAlt }) {
  // Définir les deux URL d’image (tu peux en mettre d’autres si tu veux !)
  const imageUrl = isAlt
    ? "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=2155&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    : "https://images.unsplash.com/photo-1724590391555-e4d81815e0af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="fixed inset-0 -z-10">
      {/* Image de fond */}
      <div
        className="w-full h-full bg-cover bg-center filter brightness-100"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-900 via-black to-pink-700 opacity-20" />
    </div>
  );
}
