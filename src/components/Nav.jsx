import React from 'react';

/**
 * Nav component with final refined hover glow
 */
export default function Nav() {
  const links = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Projets', href: '#projects' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-20">
      <div className="text-xl font-light text-white">Quentin Zampieri</div>
      <ul className="flex space-x-6 font-light">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="text-white transition duration-300 ease-out"
              onMouseEnter={e => e.currentTarget.style.textShadow = '0 0 4px white, 0 0 8px white'}
              onMouseLeave={e => e.currentTarget.style.textShadow = 'none'}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
