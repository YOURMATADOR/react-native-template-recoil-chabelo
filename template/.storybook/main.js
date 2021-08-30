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
    '../app/**/*.story.@(js|mdx|tsx)',
    '../storybook/stories/**/*.story.@(js|mdx|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-controls',
  ],
};
