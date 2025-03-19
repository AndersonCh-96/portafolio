// const config = {
//   theme: {
//     extend: {
//       keyframes: {
//         'slide-left': {
//           from: { transform: 'translateX(0)' },
//           to: { transform: 'translateX(-100%)' },
//         },
//       },
//       animation: {
//         'slide-left-infinite': 'slide-left 15s linear infinite',
//       },
//     },
//   },
//   plugins: {
//     "@tailwindcss/postcss": {},
//   },
// };

// export default config;

export default {
  plugins: {
    tailwindcss: {}, // Habilita Tailwind CSS
    autoprefixer: {}, // Habilita Autoprefixer
  },
};
