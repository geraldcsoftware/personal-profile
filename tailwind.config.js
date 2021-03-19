const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    content: [
      '**/*.{html,ts,scss}'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: colors.purple,
        indigo: colors.indigo,
        violet: colors.violet
      },
      fontFamily: {
        mono: ['iaWriterQuattroS', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
        rounded: ['helvetica-rounded', 'sans-serif'],
        display: ['poppins', 'sans-serif'],
        title: ['comfortaa', 'poppins', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark', 'disabled', 'checked'],
      backgroundImage: ['dark', 'disabled'],
      backgroundOpacity: ['dark', 'disabled'],
      borderWidth: ['focus-within'],
      boxShadow: ['dark', 'disabled'],
      cursor: ['disabled'],
      fontSize: ['hover'],
      ringWidth: ['focus-visible', 'disabled'],
      ringColor: ['dark', 'focus-visible'],
      ringOffsetWidth: ['focus-visible'],
      scale: ['disabled'],
      textColor: ['dark', 'disabled', 'checked'],
      transform: ['hover', 'disabled'],
      zIndex: ['hover']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-elevation')(['dark', 'hover', 'disabled'])
  ],
  corePlugins: {
    borderCollapse: false,
    tableLayout: false,
    resize: false,
  }
}
