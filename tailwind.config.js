const prod = process.env.MODE === 'production'

module.exports = {
  content: [
    `${prod ? '' : 'packages/renderer/'}src/index.html`,
    `${prod ? '' : 'packages/renderer/'}src/**/*.{vue,js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
