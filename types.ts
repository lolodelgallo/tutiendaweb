@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Space Grotesk", sans-serif;
  
  --color-urban-black: #0a0a0a;
  --color-urban-purple: #582be8;
}

@layer base {
  body {
    @apply bg-urban-black text-white font-sans antialiased;
  }
}

@layer utilities {
  .text-shadow-purple {
    text-shadow: 0 0 10px rgba(88, 43, 232, 0.5);
  }
  
  .bg-graffiti {
    background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0);
    background-size: 24px 24px;
  }
}
