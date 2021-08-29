// .storybook/main.js

module.exports = {
  check: false,
  checkOptions: {},
  reactDocgen: 'react-docgen-typescript',
  reactDocgenTypescriptOptions: {
    shouldExtractLiteralValuesFromEnum: true,
    propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
  },
  stories: [
    '../app/**/*.stories.@(js|mdx)',
    '../storybook/stories/**/*.stories.@(js|mdx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-controls',
  ],
};
