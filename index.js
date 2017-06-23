
module.exports = {
    presets: [
        // Latest stable ECMAScript features
        [
            'babel-preset-env',
            {
                targets: {
                    browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
                    // // We currently minify with uglify
                    // // Remove after https://github.com/mishoo/UglifyJS2/issues/448
                    uglify: true,
                },
                // Disable polyfill transforms
                useBuiltIns: true,
                // Do not transform modules to CJS
                modules: false,
            },
        ],
        'babel-preset-react'
    ],
    plugins: [
        'babel-plugin-transform-decorators-legacy',
        'babel-plugin-transform-class-properties',
        ['babel-plugin-transform-object-rest-spread', { useBuiltIns: true, }],
        'babel-plugin-transform-function-bind',
        ['babel-plugin-transform-react-jsx', { useBuiltIns: true, }],
        ['babel-plugin-transform-runtime', { helpers: false, polyfill: false, regenerator: true, }],
        'babel-plugin-add-module-exports',
        ['babel-plugin-transform-regenerator', { async: false }],
        'babel-plugin-syntax-dynamic-import'
        // 'babel-plugin-transform-proto-to-assign',
        // ['babel-plugin-transform-es2015-classes', { loose: true }]
    ],
    env: {
        development: {
            "plugins": ['babel-plugin-transform-react-jsx-source', 'babel-plugin-transform-react-jsx-self', 'react-hot-loader/babel']
        },
        production: {
            plugins: ['transform-react-remove-prop-types']
        }
    }
};