// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  images: {
    domains: ['www.facebook.com'],
  },
  webpack: (config) => {
    // Important: return the modified config
    config.resolve.fallback = {
      stream: require.resolve('stream-browserify'),
    };
    return config;
  },
};

module.exports = withNx(nextConfig);
