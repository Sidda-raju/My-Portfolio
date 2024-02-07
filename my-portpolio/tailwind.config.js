/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*html"],
  theme: {
    extend: {
      textColor: {
        'github-gray': '#6e7191',
        'github-light-gray': '#9ca3af',
        'linkedin-blue': '#0077b5',
        'linkedin-light-blue': '#00a0dc',
      },
      borderColor: {
        'github-gray': '#6e7191',
        'linkedin-blue': '#0077b5',
      },
      backgroundColor: {
        'dark-blue': 'hsl(212, 40%, 12%)',
      },
    },
  },
  plugins: [],
}

