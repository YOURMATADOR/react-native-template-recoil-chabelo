// .storybook/main.js

module.exports = {
  stories: ['../app/**/*.stories.@(js|mdx)', '../storybook/stories/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-controls',
  ],
};
