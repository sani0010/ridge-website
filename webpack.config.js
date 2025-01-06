module.exports = {
    // other configurations...
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: [/node_modules/], // Exclude node_modules to ignore source map warnings for dependencies
        },
      ],
    },
  };
  