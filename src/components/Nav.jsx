import React, { useState } from 'react';

export default function Nav() {
  const links = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Projets', href: '#projects' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-20">
      <div className="text-xl font-light text-white">Quentin Zampieri</div>
      <ul className="flex space-x-6 font-light">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={() => setHovered(null)}
              className="text-white transition-all duration-300 ease-out"
              style={{
                textShadow:
                  hovered === label ? '0 0 4px white, 0 0 8px white' : 'none',
                transition: 'text-shadow 0.3s ease, transform 0.2s ease',
                transform: hovered === label ? 'scale(1.02)' : 'scale(1)',
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
