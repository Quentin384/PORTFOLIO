import React from 'react';
import styled from 'styled-components';

const GitHubButton = () => {
  return (
    <StyledWrapper>
      <a
        href="https://github.com/Quentin384"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="github"
        >
          <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
        </svg>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    display: grid;
    place-items: center;
    width: 3.5em;
    height: 3.5em;                // taille du bouton 
    background: #e3edf7;
    border-radius: 10px;
    box-shadow:
      6px 6px 10px -1px rgba(0,0,0,0.15),
     -6px -6px 10px -1px rgba(255,255,255,0.7);
    border: none;
    cursor: pointer;
    text-decoration: none;  /* retire le soulignement */
    transition: transform 0.5s;
  }

  .btn:hover {
    box-shadow:
      inset 4px 4px 6px -1px rgba(0,0,0,0.2),
      inset -4px -4px 6px -1px rgba(255,255,255,0.7),
      -0.5px -0.5px 0px rgba(255,255,255,1),
      0.5px 0.5px 0px rgba(0,0,0,0.15),
      0px 12px 10px -10px rgba(0,0,0,0.05);
    border: 1px solid rgba(0,0,0,0.1);
    transform: translateY(0.5em);
  }

  .btn svg {
    position: relative;
    width: 1.8em;    /* taille de l’icône à l’intérieur */
    height: 1.8em;
    transition: transform 0.5s;
    fill: #0092E4;
  }

  .btn:hover svg {
    transform: scale(0.9);
    fill: #333333;
  }
`;

export default GitHubButton;
