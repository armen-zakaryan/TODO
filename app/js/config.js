require.config({
    paths: {
        react: '../../bower_components/react/react',
        JSXTransformer: '../../bower_components/react/JSXTransformer',
        jsx: "../../bower_components/require-jsx/jsx",
        'react-router': '../../bower_components/react-router/build/umd/ReactRouter'
    },
    shim: {
        react: {
            exports: "React"
        },
        JSXTransformer: {
            exports: "JSXTransformer"
        },
        'react-router': {
            deps: ['react'],
            exports: 'ReactRouter'
        }
    },
    priority: []
});