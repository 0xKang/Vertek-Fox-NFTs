const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.slate[100],
          to_bg: colors.slate[200],
        },
        titles: '#4D3FEC',
        links: {
          txt: '#4D3FEC',
          hover_txt: '#362BA8',
        },
        loading_spinner: colors.indigo[500],
        popups: {
          bg: colors.white,
          txt: '#4D3FEC',
          internal_border: colors.slate[200],
        },
        warning: {
          txt: colors.white,
          bg: '#302B84',
          border: colors.yellow[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.white,
          bg: '#161626',
          border: '#9A9AA6',
          hover_txt: colors.white,
          hover_bg: '#1C1C34',
          hover_border: '#C6C6CC',
        },
        btn_primary: {
          txt: colors.white,
          bg: '#302B84',
          border: '#2D2D33',
          hover_txt: colors.white,
          hover_bg: '#363562',
          hover_border: '#7D7D8B',
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: '#4D3FEC',
        txt_input: {
          txt: '#4D3FEC',
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: '#4D3FEC',
          focus_bg: colors.slate[50],
          focus_border: colors.indigo[300],
          placeholder_txt: '#4D3FEC',
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.slate[800],
          bg: colors.indigo[100],
        },

        // Mint widget
        token_preview: colors.indigo[200],
      },
    },
  },
  variants: {},
  plugins: [],
};
