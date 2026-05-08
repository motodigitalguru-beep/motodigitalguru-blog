/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          soft: "#161616",
        },
        accent: "#3b82f6",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            "--tw-prose-body": theme("colors.zinc.300"),
            "--tw-prose-headings": theme("colors.zinc.100"),
            "--tw-prose-lead": theme("colors.zinc.300"),
            "--tw-prose-links": theme("colors.accent"),
            "--tw-prose-bold": theme("colors.zinc.100"),
            "--tw-prose-counters": theme("colors.zinc.500"),
            "--tw-prose-bullets": theme("colors.zinc.500"),
            "--tw-prose-hr": theme("colors.zinc.800"),
            "--tw-prose-quotes": theme("colors.zinc.300"),
            "--tw-prose-quote-borders": theme("colors.zinc.800"),
            "--tw-prose-captions": theme("colors.zinc.500"),
            "--tw-prose-code": theme("colors.zinc.100"),
            "--tw-prose-pre-code": theme("colors.zinc.300"),
            "--tw-prose-pre-bg": theme("colors.ink.soft"),
            "--tw-prose-th-borders": theme("colors.zinc.800"),
            "--tw-prose-td-borders": theme("colors.zinc.900"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
