const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { webpack } = options;
    Object.assign(config.experiments, { topLevelAwait: true });
    if (!options.isServer) {
      //config.cache=false
      config.plugins.push(
        new NextFederationPlugin({
          name: 'checkout',
          remotes: {
            home: `home@https://wg-module-federation.azurewebsites.net/_next/static/chunks/remoteEntry.js`,
            shop: 'shop@https://wg-module-federation.azurewebsites.net/_next/static/chunks/remoteEntry.js',
          },
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './title': './components/exposedTitle.js',
            './checkout': './pages/checkout',
            './pages-map': './pages-map.js',
          },
          shared: {},
        }),
      );
    }

    return config;
  },
};
