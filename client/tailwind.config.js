module.exports = {
  theme: {
    extend: {},
    minWidth: {
      20: '20%',
      40: '40%',
      50: '50%',
      60: '60%',
      80: '80%',
    },
  },
  variants: {
    backgroundColor: [
      'hover',
      'focus',
      'active',
      'disabled',
    ],
  },
  plugins: [],
  purge: {
    content: [
      // './public/*.html',
      './src/**/*.html',
      './src/**/*.vue',
    ],
    whitelistPatterns: [
      /html/,
      /^ag-/,
      /^app-/,
      /^leaflet/,
      /^vue2leaflet/,
      /^marker-cluster/,
    ],
    whitelistPatternsChildren: [
      /^ag-/,
      /^app-/,
      /^leaflet/,
      /^vue2leaflet/,
      /^marker-cluster/,
    ],
  },
}
