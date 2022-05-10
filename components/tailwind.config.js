module.exports = {
    content: [  // 使用tailwind的范围
      './src/**/*.tsx',
      './src/**/*.html',
      './public/**/*.html'
    ],
    plugin: [require('@tailwindcss/typography')]
  }