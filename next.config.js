const path = require('path');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');

const env = process.env.NODE_ENV || 'development';

const envConfigs = {
  development: {
    API_URL: 'https://6164054db55edc00175c1cc9.mockapi.io/v1/',
  },
  production: {
    API_URL: 'https://6164054db55edc00175c1cc9.mockapi.io/v1/',
  },
}[env];

module.exports = withPlugins(
  [
    [
      withAntdLess,
      {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    ],
    [withImages],
  ],
  {
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ];
        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        });
      }
      return config;
    },
    env: envConfigs,
    sassOptions: {
      includePaths: [path.join(__dirname, 'assets')],
    },
  }
);
