
# PORTFOLIO Personnel de Quentin384

Bienvenue dans le dépôt de **mon** portfolio personnel ! Vous y trouverez l’ensemble du code source qui alimente mon site web, construit avec React et Vite, ainsi que toute la documentation nécessaire pour le configurer, le développer et le déployer.

---

## 📖 Table des matières

1. [À propos](#-à-propos)  
2. [Démonstration & Captures d’écran](#-démonstration--captures-décran)  
3. [Fonctionnalités](#-fonctionnalités)  
4. [Stack Technique](#-stack-technique)  
5. [Architecture du Projet](#-architecture-du-projet)  
6. [Installation et Démarrage](#-installation-et-démarrage)  
   - [Prérequis](#prérequis)  
   - [Installation](#installation)  
   - [Scripts Disponibles](#scripts-disponibles)  
7. [Configuration Personnalisée](#-configuration-personnalisée)  
   - [Variables d’environnement](#variables-denvironnement)  
   - [Theme & Tailwind](#theme--tailwind)  
8. [Développement & Linting](#-développement--linting)  
9. [Construction & Déploiement](#-construction--déploiement)  
   - [Netlify](#netlify)  
   - [Vercel](#vercel)  
   - [GitHub Pages](#github-pages)  
10. [Ajouter ou Modifier du Contenu](#-ajouter-ou-modifier-du-contenu)  
11. [Contribuer](#-contribuer)  
12. [Licence](#-licence)  
13. [Contact](#-contact)  

---

## 🔍 À propos

Je suis **Quentin** (alias `Quentin384`), développeur front-end / full-stack passionné par les expériences utilisateur fluides et les interfaces modernes.  
Ce portfolio a pour but de :

- Présenter mes réalisations et projets  
- Mettre en avant mes compétences et technologies favorites  
- Servir de boilerplate réutilisable pour mes futurs sites personnels  

---

## 🎬 Démonstration & Captures d’écran

> **Site en ligne** : https://votre-domaine.com  
> **Mode clair / sombre**  

![Accueil du portfolio](./public/screenshots/home-light.png)  
![Accueil du portfolio en mode sombre](./public/screenshots/home-dark.png)  

---

## ✨ Fonctionnalités

- **Pages clés** : Accueil, À propos, Projets, Contact  
- **Design responsive** « mobile-first »  
- **Dark mode** avec préférence sauvegardée dans `localStorage`  
- **Animations** et transitions fluides (Framer Motion)  
- **Optimisation SEO** via balises méta dans `index.html`  
- **Formulaire de contact** fonctionnel (intégration formulaire statique ou API tiers)  
- **Ajout de nouveaux projets** possible via un simple composant React  

---

## 🛠 Stack Technique

<!-- Badges générés via shields.io -->
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=flat&logo=postcss&logoColor=white)](https://postcss.org)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)](https://prettier.io)
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://npmjs.com)

Cette section présente les principales technologies et outils utilisés pour construire et maintenir ce projet.

---

## 🏗 Architecture du Projet

```

PORTFOLIO/
├── public/
│   ├── index.html        # gabarit HTML principal
│   ├── favicon.ico       # icône du site
│   └── screenshots/      # captures d’écran pour la doc
├── src/
│   ├── assets/           # images, polices, icônes
│   ├── components/       # composants réutilisables (Navbar, Card…)
│   ├── pages/            # pages (Home.jsx, About.jsx, Projects.jsx, Contact.jsx)
│   ├── styles/           # CSS global (index.css @tailwind)
│   ├── App.jsx           # composant racine
│   └── main.jsx          # point d’entrée Vite
├── .eslintrc.js          # configuration ESLint
├── postcss.config.js     # configuration PostCSS
├── tailwind.config.js    # configuration Tailwind CSS
├── vite.config.js        # configuration Vite
├── package.json          # dépendances & scripts
└── README.md             # cette documentation

````

---

## 🚀 Installation et Démarrage

### Prérequis

- **Node.js** ≥ 14.x  
- **npm** ≥ 6.x  

### Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/Quentin384/PORTFOLIO.git
cd PORTFOLIO

# 2. Installer les dépendances
npm install
````

### Scripts Disponibles

| Commande          | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Démarrage du serveur de développement (HMR activé) |
| `npm run build`   | Génère le build de production dans `dist/`         |
| `npm run preview` | Sert localement le build pour tests (port 4173)    |
| `npm run lint`    | Exécute ESLint sur le dossier `src/`               |
| `npm run format`  | Formate le code via Prettier (si configuré)        |

---

## ⚙️ Configuration Personnalisée

### Variables d’environnement

Créez un fichier `.env` à la racine pour définir les clés suivantes :

```env
VITE_API_ENDPOINT=https://api.mon-portfolio.com
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxx
```

> **Astuce** : tous les noms doivent être préfixés `VITE_` pour être accessibles dans le code.

### Theme & Tailwind

Modifiez `tailwind.config.js` pour personnaliser :

* Couleurs
* Polices
* Espacements

```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d9488",
        secondary: "#9333ea",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

---

## 🛠 Développement & Linting

* Respectez les règles ESLint pour garantir une base de code cohérente.
* Lancez `npm run lint -- --fix` pour corriger automatiquement les problèmes simples.
* Utilisez Prettier (via `npm run format`) pour formater le code.

---

## 📦 Construction & Déploiement

Après un `npm run build`, le dossier `dist/` contient votre site statique optimisé.

### Netlify

1. Connectez votre dépôt GitHub → Nouveau site.
2. Build command : `npm run build`
3. Publish directory : `dist`
4. (Optionnel) Ajoutez un `netlify.toml` pour gérer redirections et headers.

### Vercel

1. Importez le projet depuis GitHub.
2. Vercel détecte automatiquement Vite.
3. Déployez en un clic.

### GitHub Pages

1. Build localement : `npm run build`
2. Déployez le contenu de `dist/` sur la branche `gh-pages`
3. Configurez l’action GitHub Actions `peaceiris/actions-gh-pages` si besoin.

---

## ✍️ Ajouter ou Modifier du Contenu

1. **Projets** : ouvrez `src/data/projects.js` (ou équivalent)
2. Ajoutez votre objet projet avec `{ title, description, url, technologies }`
3. Sauvegardez et relancez `npm run dev` pour voir vos modifications.

---

## 🤝 Contribuer

1. Forkez ce dépôt
2. Créez une branche feature :

   ```bash
   git checkout -b feature/ma-nouvelle-fonction
   ```
3. Commitez vos changements :

   ```bash
   git commit -m "feat: ajout de la section Témoignages"
   ```
4. Poussez et ouvrez une Pull Request

Merci de suivre la charte de code et de lancer `npm run lint` avant toute PR !

---

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## ✉️ Contact

* **Email** : [quentin384@example.com](mailto:quentin384@example.com)
* **LinkedIn** : [https://linkedin.com/in/quentin384](https://linkedin.com/in/quentin384)
* **Site Web** : [https://votre-domaine.com](https://votre-domaine.com)

N’hésitez pas à me contacter pour toute question ou collaboration !

