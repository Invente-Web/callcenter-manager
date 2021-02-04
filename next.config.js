module.exports = {
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config, { webpack, isServer }) => {
    const publicEnv = {};
    Object.keys(process.env).forEach(env => {
      if (env.includes('NEXT_PUBLIC_')) {
        publicEnv[env] = process.env[env];
      }
    });
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.public': JSON.stringify(publicEnv),
      })
    );

    if (isServer) {
      require("./scripts/google-fonts");
    }

    return config;
  },
};
