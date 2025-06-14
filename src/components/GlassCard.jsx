.glass {
  position: relative;
  background: rgba(255,255,255,0.04);          /* très léger voile blanc */
  border-radius: 1.25rem;
  border: 1px solid rgba(255,255,255,0.15);
  /* on passe à 60px de blur pour un net contraste */
  backdrop-filter: blur(60px) saturate(180%);
  -webkit-backdrop-filter: blur(60px) saturate(180%);
  box-shadow: 0 4px 24px rgba(0,0,0,0.5);
  overflow: hidden;
}
