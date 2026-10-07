import React from 'react';

// Procedural SVG Graphic 1: Cozy Coffee Date
export const FirstGlanceGraphic: React.FC = () => (
  <svg className="w-full h-full rounded-2xl" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGlance" x1="0" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3d231d" />
        <stop offset="1" stopColor="#251410" />
      </linearGradient>
      <linearGradient id="windowGlow" x1="300" y1="50" x2="300" y2="250" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f7e29b" stopOpacity="0.4" />
        <stop offset="1" stopColor="#c86d51" stopOpacity="0.1" />
      </linearGradient>
      <radialGradient id="cupSteam" cx="50%" cy="50%" r="50%">
        <stop stopColor="#fdfbf7" stopOpacity="0.8" />
        <stop offset="1" stopColor="#fdfbf7" stopOpacity="0" />
      </radialGradient>
      <filter id="softGlow">
        <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Background Wall */}
    <rect width="600" height="400" fill="url(#bgGlance)" />
    
    {/* Warm Cozy Window */}
    <rect x="180" y="40" width="240" height="200" rx="16" fill="url(#windowGlow)" stroke="#d4af37" strokeWidth="2" strokeOpacity="0.4" />
    <line x1="300" y1="40" x2="300" y2="240" stroke="#d4af37" strokeWidth="1.5" strokeOpacity="0.3" />
    <line x1="180" y1="140" x2="420" y2="140" stroke="#d4af37" strokeWidth="1.5" strokeOpacity="0.3" />

    {/* Distant Bokeh outside window */}
    <circle cx="240" cy="90" r="16" fill="#d4af37" fillOpacity="0.25" filter="url(#softGlow)" />
    <circle cx="360" cy="110" r="22" fill="#e88d72" fillOpacity="0.25" filter="url(#softGlow)" />
    <circle cx="280" cy="170" r="12" fill="#8a9a86" fillOpacity="0.25" filter="url(#softGlow)" />

    {/* String Lights across window */}
    <path d="M180 50 Q300 90 420 50" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="3 3" />
    <circle cx="230" cy="65" r="4" fill="#f7e29b" filter="url(#softGlow)" />
    <circle cx="300" cy="72" r="4" fill="#f7e29b" filter="url(#softGlow)" />
    <circle cx="370" cy="65" r="4" fill="#f7e29b" filter="url(#softGlow)" />

    {/* Coffee Table Shelf */}
    <rect x="80" y="270" width="440" height="18" rx="4" fill="#673426" stroke="#96432d" strokeWidth="1" />
    <path d="M120 288 L100 400 L140 400 Z" fill="#3d231d" opacity="0.6" />
    <path d="M480 288 L460 400 L500 400 Z" fill="#3d231d" opacity="0.6" />

    {/* Two Steaming Coffee Mugs */}
    {/* Left Mug - Terracotta */}
    <rect x="230" y="225" width="44" height="46" rx="8" fill="#c86d51" stroke="#f3d3c8" strokeWidth="1.5" />
    <path d="M230 236 C215 236 215 260 230 260" stroke="#c86d51" strokeWidth="4" fill="none" />
    {/* Steam Left */}
    <path d="M245 215 Q240 200 248 185 Q252 175 245 165" stroke="url(#cupSteam)" strokeWidth="3" strokeLinecap="round" fill="none" />

    {/* Right Mug - Cream */}
    <rect x="320" y="220" width="48" height="51" rx="8" fill="#fdfbf7" stroke="#d4af37" strokeWidth="1.5" />
    <path d="M368 232 C383 232 383 258 368 258" stroke="#fdfbf7" strokeWidth="4" fill="none" />
    {/* Steam Right */}
    <path d="M340 210 Q346 195 338 180 Q334 170 342 160" stroke="url(#cupSteam)" strokeWidth="3.5" strokeLinecap="round" fill="none" />

    {/* Sage Plant Pot on Left */}
    <path d="M110 230 L140 230 L135 270 L115 270 Z" fill="#8a9a86" />
    <circle cx="120" cy="215" r="14" fill="#6f816b" />
    <circle cx="132" cy="210" r="12" fill="#8a9a86" />
    <circle cx="125" cy="200" r="10" fill="#a0b29c" />

    {/* Gentle Heart Sparkle in Middle */}
    <path d="M296 200 C296 194 290 190 285 195 C280 190 274 194 274 200 C274 208 285 214 285 214 C285 214 296 208 296 200 Z" fill="#e88d72" filter="url(#softGlow)" />
  </svg>
);

// Procedural SVG Graphic 2: Stargazing Midnight Talks
export const MidnightTalksGraphic: React.FC = () => (
  <svg className="w-full h-full rounded-2xl" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skyGrad" x1="300" y1="0" x2="300" y2="400" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1a141a" />
        <stop offset="0.6" stopColor="#2c1a1f" />
        <stop offset="1" stopColor="#3d231d" />
      </linearGradient>
      <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
        <stop stopColor="#fdfbf7" stopOpacity="0.9" />
        <stop offset="0.4" stopColor="#f7e29b" stopOpacity="0.4" />
        <stop offset="1" stopColor="#d4af37" stopOpacity="0" />
      </radialGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Night Sky */}
    <rect width="600" height="400" fill="url(#skyGrad)" />

    {/* Glowing Crescent Moon */}
    <circle cx="460" cy="110" r="45" fill="url(#moonGlow)" filter="url(#glow)" />
    <path d="M475 75 C450 75 435 95 435 120 C435 145 450 165 475 165 C455 165 442 148 442 120 C442 92 455 75 475 75 Z" fill="#fdfbf7" filter="url(#glow)" />

    {/* Twinkling Stars */}
    {Array.from({ length: 28 }).map((_, i) => (
      <circle
        key={i}
        cx={(i * 37 + 19) % 580 + 10}
        cy={(i * 23 + 13) % 200 + 15}
        r={(i % 3) * 0.8 + 1}
        fill="#f7e29b"
        opacity={(i % 5) * 0.18 + 0.3}
      />
    ))}

    {/* Constellation lines */}
    <polyline points="120,60 170,80 230,70 280,110 320,90" stroke="#d4af37" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
    <circle cx="120" cy="60" r="3" fill="#fdfbf7" filter="url(#glow)" />
    <circle cx="170" cy="80" r="3" fill="#fdfbf7" filter="url(#glow)" />
    <circle cx="230" cy="70" r="3" fill="#fdfbf7" filter="url(#glow)" />
    <circle cx="280" cy="110" r="3" fill="#fdfbf7" filter="url(#glow)" />
    <circle cx="320" cy="90" r="3" fill="#fdfbf7" filter="url(#glow)" />

    {/* Rolling Sage Hills */}
    <path d="M-20 280 Q140 220 300 260 T620 230 L620 400 L-20 400 Z" fill="#465243" opacity="0.8" />
    <path d="M-20 310 Q200 250 420 300 T620 290 L620 400 L-20 400 Z" fill="#3a4338" />

    {/* Cozy Blanket & Warm Glowing Lantern */}
    <path d="M220 340 Q300 325 380 340 L390 380 L210 380 Z" fill="#c86d51" stroke="#e88d72" strokeWidth="1" />

    {/* Lantern */}
    <rect x="290" y="315" width="20" height="28" rx="4" fill="#d4af37" />
    <circle cx="300" cy="329" r="18" fill="url(#moonGlow)" filter="url(#glow)" />
    <rect x="294" y="320" width="12" height="18" fill="#fdfbf7" />

    {/* Silhouette Lovers Sitting Side by Side */}
    <path d="M260 338 C260 320 270 310 278 310 C286 310 290 325 288 338 Z" fill="#1f1917" />
    <circle cx="276" cy="304" r="8" fill="#1f1917" />

    <path d="M312 338 C310 322 318 308 326 308 C334 308 340 320 340 338 Z" fill="#1f1917" />
    <circle cx="324" cy="302" r="7.5" fill="#1f1917" />
    {/* Resting head on shoulder curve */}
    <path d="M320 304 C308 306 300 310 292 315" stroke="#1f1917" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

// Procedural SVG Graphic 3: Sunset Hills Roadtrip
export const SunsetRoadtripGraphic: React.FC = () => (
  <svg className="w-full h-full rounded-2xl" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sunSky" x1="300" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
        <stop stopColor="#96432d" />
        <stop offset="0.4" stopColor="#c86d51" />
        <stop offset="0.75" stopColor="#e88d72" />
        <stop offset="1" stopColor="#f7e29b" />
      </linearGradient>
      <radialGradient id="sunDisk" cx="50%" cy="50%" r="50%">
        <stop stopColor="#ffffff" />
        <stop offset="0.3" stopColor="#f7e29b" />
        <stop offset="1" stopColor="#e88d72" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Terracotta Sunset Sky */}
    <rect width="600" height="400" fill="url(#sunSky)" />

    {/* Radiant Sun Setting on Horizon */}
    <circle cx="300" cy="220" r="60" fill="url(#sunDisk)" />

    {/* Sun Rays */}
    {Array.from({ length: 8 }).map((_, i) => (
      <line
        key={i}
        x1="300"
        y1="220"
        x2={300 + Math.cos((i * Math.PI) / 7 - Math.PI) * 180}
        y2={220 + Math.sin((i * Math.PI) / 7 - Math.PI) * 180}
        stroke="#f7e29b"
        strokeWidth="2"
        opacity="0.3"
      />
    ))}

    {/* Layered Mountains / Ridge Silhouettes */}
    <path d="M-20 260 Q120 200 280 235 T620 210 L620 400 L-20 400 Z" fill="#b4553a" opacity="0.9" />
    <path d="M-20 290 Q220 230 450 270 T620 260 L620 400 L-20 400 Z" fill="#6f816b" />
    <path d="M-20 320 Q150 280 340 310 T620 295 L620 400 L-20 400 Z" fill="#3a4338" />

    {/* Winding Sunset Highway */}
    <path d="M260 400 C275 340 285 300 295 270 L305 270 C310 300 325 340 340 400 Z" fill="#251410" />
    <path d="M300 400 L300 270" stroke="#f7e29b" strokeWidth="2" strokeDasharray="8 6" opacity="0.8" />

    {/* Vintage Convertible Car Silhouette */}
    <g transform="translate(370, 275) scale(0.65)">
      {/* Car Body */}
      <path d="M10 35 C20 20 50 15 80 15 L140 15 C170 15 190 25 210 35 L220 45 L0 45 Z" fill="#1f1917" />
      {/* Wheels */}
      <circle cx="45" cy="45" r="14" fill="#1f1917" stroke="#d4af37" strokeWidth="2" />
      <circle cx="165" cy="45" r="14" fill="#1f1917" stroke="#d4af37" strokeWidth="2" />
      {/* Windshield */}
      <path d="M60 15 L80 -5 L110 -5 L110 15 Z" stroke="#1f1917" strokeWidth="3" fill="none" />
      {/* Two Heads in Convertible */}
      <circle cx="95" cy="4" r="6" fill="#1f1917" />
      <circle cx="120" cy="5" r="5.5" fill="#1f1917" />
    </g>

    {/* Birds Flying into Sunset */}
    <path d="M140 100 Q150 90 160 100 Q170 90 180 100" stroke="#251410" strokeWidth="2" fill="none" opacity="0.7" />
    <path d="M185 115 Q192 107 200 115 Q208 107 215 115" stroke="#251410" strokeWidth="1.8" fill="none" opacity="0.7" />
  </svg>
);

// Procedural SVG Graphic 4: Everyday Magic at Home
export const EverydayMagicGraphic: React.FC = () => (
  <svg className="w-full h-full rounded-2xl" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="homeBg" x1="0" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2e1c18" />
        <stop offset="1" stopColor="#1f1513" />
      </linearGradient>
      <radialGradient id="candleLight" cx="50%" cy="50%" r="50%">
        <stop stopColor="#fdfbf7" />
        <stop offset="0.4" stopColor="#f7e29b" stopOpacity="0.8" />
        <stop offset="1" stopColor="#c86d51" stopOpacity="0" />
      </radialGradient>
      <filter id="softFlame">
        <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Warm Interior Background */}
    <rect width="600" height="400" fill="url(#homeBg)" />

    {/* Framed Wall Art Photo / Memory */}
    <rect x="220" y="30" width="160" height="110" rx="8" fill="#3d231d" stroke="#d4af37" strokeWidth="2" />
    <rect x="230" y="40" width="140" height="90" rx="4" fill="#6f816b" />
    {/* Heart symbol inside frame */}
    <path d="M300 95 C300 85 288 78 280 86 C272 78 260 85 260 95 C260 108 280 118 280 118 C280 118 300 108 300 95 Z" fill="#fdfbf7" opacity="0.9" />

    {/* Cozy Wooden Credenza Table */}
    <rect x="60" y="250" width="480" height="24" rx="4" fill="#7c3a29" stroke="#96432d" strokeWidth="1" />
    <rect x="80" y="274" width="440" height="120" fill="#4a2319" />

    {/* Vinyl Record Player */}
    <rect x="110" y="200" width="130" height="50" rx="8" fill="#c86d51" stroke="#f3d3c8" strokeWidth="1.5" />
    {/* Spinning Vinyl Disk */}
    <circle cx="160" cy="225" r="20" fill="#1f1917" stroke="#d4af37" strokeWidth="1" />
    <circle cx="160" cy="225" r="6" fill="#f7e29b" />
    {/* Tonearm */}
    <line x1="210" y1="210" x2="175" y2="225" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" />

    {/* Music Notes Floating in Air */}
    <path d="M170 180 Q180 160 195 165" stroke="#f7e29b" strokeWidth="2" fill="none" />
    <circle cx="170" cy="180" r="3" fill="#f7e29b" />
    <circle cx="195" cy="165" r="3" fill="#f7e29b" />

    {/* Candle Trio with Warm Glowing Flames */}
    {/* Candle 1 */}
    <rect x="290" y="195" width="18" height="55" rx="3" fill="#fdfbf7" />
    <circle cx="299" cy="188" r="14" fill="url(#candleLight)" filter="url(#softFlame)" />
    <path d="M299 184 Q302 188 299 193 Q296 188 299 184 Z" fill="#f7e29b" />

    {/* Candle 2 */}
    <rect x="320" y="175" width="22" height="75" rx="3" fill="#f8f2e7" />
    <circle cx="331" cy="168" r="18" fill="url(#candleLight)" filter="url(#softFlame)" />
    <path d="M331 162 Q335 168 331 173 Q327 168 331 162 Z" fill="#f7e29b" />

    {/* Candle 3 */}
    <rect x="354" y="210" width="16" height="40" rx="3" fill="#fdfbf7" />
    <circle cx="362" cy="203" r="12" fill="url(#candleLight)" filter="url(#softFlame)" />
    <path d="M362 199 Q365 203 362 208 Q359 203 362 199 Z" fill="#f7e29b" />

    {/* Tea Teapot & Cozy Cup */}
    <path d="M420 220 C420 200 450 200 450 220 L455 250 L415 250 Z" fill="#8a9a86" stroke="#ced9cb" strokeWidth="1" />
    <path d="M450 225 C465 225 465 240 450 240" stroke="#8a9a86" strokeWidth="3" fill="none" />
    <rect x="470" y="235" width="20" height="15" rx="3" fill="#fdfbf7" />

    {/* Ambient Glow Pool */}
    <ellipse cx="330" cy="250" rx="140" ry="12" fill="#f7e29b" opacity="0.25" filter="url(#softFlame)" />
  </svg>
);
