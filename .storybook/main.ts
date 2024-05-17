const postcss = require('postcss');

module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: postcss,
                    postcssOptions: {
                        plugins: [
                            require('postcss-flexbugs-fixes'),
                            require('autoprefixer')({
                                flexbox: 'no-2009',
                            }),
                        ],
                    },
                },
            },
        },
    ],
};
