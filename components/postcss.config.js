module.exports = {
    plugin: [
        'postcss-import',
        'tailwindcss/nesting',
        'tailwindcss',

        // 以下配置参考react cra webpack的配置
        'postcss-flexbugs-fixes',
        [
          'postcss-preset-env',
          {
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          },
        ]
    ]
  }

  
  