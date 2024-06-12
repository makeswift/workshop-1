/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        muted: {
          background: 'hsl(var(--color-muted-background))',
          foreground: 'hsl(var(--color-muted-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          highlight: 'hsl(var(--color-primary-highlight))',
        },
        accent: {
          DEFAULT: 'hsl(var(--color-accent))',
          highlight: 'hsl(var(--color-accent-highlight))',
        },
        border: 'hsl(var(--color-border-color))',
        transparent: 'transparent',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        circle: '50%',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      keyframes: {
        collapse: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        expand: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        glowBoxHighlight: {
          '0%': { opacity: 0, left: 0 },
          '5%, 15%': { opacity: 1 },
          '20%': { opacity: 0, left: '100%', transform: 'translateX(-100%)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeInDemo: {
          '0%': { opacity: 1 },
          '25%': { opacity: 0 },
          '40%': { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeUpDemo: {
          '0%': { opacity: 1 },
          '25%': { opacity: 0, transform: 'translateY(0)' },
          '35%': { opacity: 0, transform: 'translateY(20%)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeDownDemo: {
          '0%': { opacity: 1 },
          '25%': { opacity: 0, transform: 'translateY(0)' },
          '35%': { opacity: 0, transform: 'translateY(-20%)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeRightDemo: {
          '0%': { opacity: 1 },
          '25%': { opacity: 0, transform: 'translateX(0)' },
          '35%': { opacity: 0, transform: 'translateX(-20%)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeLeftDemo: {
          '0%': { opacity: 1 },
          '25%': { opacity: 0, transform: 'translateX(0)' },
          '35%': { opacity: 0, transform: 'translateX(20%)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        blurInDemo: {
          '0%': { opacity: 1 },
          '20%': { opacity: 0, filter: 'blur(0)' },
          '40%': { opacity: 0, filter: 'blur(16px)' },
          to: { opacity: 1, filter: 'blur(0)' },
        },
        scaleUpDemo: {
          '0%': { opacity: 1 },
          '25%': { opacity: 0, transform: 'scale(1)' },
          '35%': { opacity: 0, transform: 'scale(0.8)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
        scaleDownDemo: {
          '0%': { opacity: 1 },
          '25%': { opacity: 0, transform: 'scale(1)' },
          '35%': { opacity: 0, transform: 'scale(1.2)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        collapse: 'collapse 400ms cubic-bezier(1, 0, 0.25, 1)',
        expand: 'expand 400ms cubic-bezier(1, 0, 0.25, 1)',
        glowBoxHighlight: 'glowBoxHighlight 5s linear infinite',
        scrollLeft: 'scrollLeft var(--marquee-duration) linear infinite',
        fadeInDemo: 'fadeInDemo 1800ms linear',
        fadeUpDemo: 'fadeUpDemo 2000ms cubic-bezier(0.25,1,0.5,1)',
        fadeDownDemo: 'fadeDownDemo 2000ms cubic-bezier(0.25,1,0.5,1)',
        fadeLeftDemo: 'fadeLeftDemo 2000ms cubic-bezier(0.25,1,0.5,1)',
        fadeRightDemo: 'fadeRightDemo 2000ms cubic-bezier(0.25,1,0.5,1)',
        blurInDemo: 'blurInDemo 1800ms linear',
        scaleUpDemo: 'scaleUpDemo 2000ms cubic-bezier(0.25,1,0.5,1)',
        scaleDownDemo: 'scaleDownDemo 2000ms cubic-bezier(0.25,1,0.5,1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        noise: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}
