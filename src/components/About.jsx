import React from 'react';
import Tooltip from './Tooltip';
import GitHubButton from './GitHubButton';  // 🆕 importe ton bouton GitHub

export default function About() {
  return (
    <section id="about" className="py-20 px-6 text-white">
      {/* 📌 Ce div gère *juste* l’espace entre les textes */}
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <img
          src="https://avatars.githubusercontent.com/Quentin384"
          alt="Avatar Quentin"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-3xl font-semibold">Quentin Zampieri</h2>
        <p className="text-white">
          Développeur Fullstack Java &amp; Angular basé à Grenoble 🇫🇷
        </p>
        <p className="text-white">
          🚀 En recherche d’un stage Java Fullstack (septembre 2025 – janvier 2026). J’ai envie de rejoindre une équipe pour apprendre, coder sur du concret, et m’impliquer à fond. Curieux, sérieux, et toujours partant pour relever un défi technique ou humain.
        </p>
        <blockquote className="italic text-white">
          “Un bon code ne prouve pas qu’on est intelligent. Mais faut quand même être vachement intelligent pour en écrire 😉”
        </blockquote>
      </div>

      {/* 📌 Boutons côte à côte */}
      <div className="mt-20 flex justify-center space-x-16">
        <Tooltip />
        <GitHubButton />
      </div>
    </section>
  );
}
