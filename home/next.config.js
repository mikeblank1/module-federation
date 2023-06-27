const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'home',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            home: 'home@https://wg-module-federation.azurewebsites.net/_next/static/chunks/remoteEntry.js',
            shop: 'shop@https://wg-module-federation-shop.azurewebsites.net/_next/static/chunks/remoteEntry.js',
            checkout: 'checkout@https://wg-module-federation-checkout.azurewebsites.net/_next/static/chunks/remoteEntry.js',
          },
          exposes: {
            './nav': './components/nav.js',
            './home': './realPages/index.js',
            './pages-map': './pages-map.js',
          },
          shared: {},
        }),
      );
    }

    return config;
  },
};
