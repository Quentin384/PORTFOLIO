import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 text-white">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <img
          src="https://avatars.githubusercontent.com/Quentin384"
          alt="Avatar Quentin"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-3xl font-semibold">Quentin Zampieri</h2>
        <p className="text-gray-400 text-lg">
          Développeur Fullstack Java &amp; Angular basé à Grenoble 🇫🇷
        </p>
        <p className="text-gray-300 leading-relaxed">
          🚀 En recherche d’un stage Java Fullstack (septembre 2025 – janvier 2026). J’ai envie de rejoindre une équipe pour apprendre, coder sur du concret, et m’impliquer à fond. Curieux, sérieux, et toujours partant pour relever un défi technique ou humain.
        </p>
        <blockquote className="italic text-gray-400">
          “Un bon code ne prouve pas qu’on est intelligent. Mais faut quand même être vachement intelligent pour en écrire 😉”
        </blockquote>
      </div>
    </section>
  );
}
