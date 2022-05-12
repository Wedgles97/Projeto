module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@api': './src/api',
            '@assets': './src/assets',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@redux': './src/redux',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@styles': './src/styles',
            '@utils': './src/utils'
          },
        },
      ],
    ],
  };
};
