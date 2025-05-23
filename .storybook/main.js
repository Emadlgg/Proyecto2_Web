module.exports = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  async viteFinal(config) {
    return {
      ...config,
      esbuild: {
        ...config.esbuild,
        loader: 'jsx',
        include: /src\/.*\.jsx?$/,
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        esbuildOptions: {
          loader: {
            '.js': 'jsx',
          },
        },
      },
    }
  }
}