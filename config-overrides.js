const { injectBabelPlugin,getLoader } = require("react-app-rewired");
const path = require("path");
const resolve = (dir) => path.resolve(__dirname,".",dir);
const fileLoaderMatcher = (rule) => {
  return rule.loader && rule.loader.indexOf("file-loader") != -1;
}
module.exports = function override(config, env) {
  // 配置 babel-plugin-import 实现按需加载
  config = injectBabelPlugin(["import", {
    libraryName: "antd-mobile",
    style: "css",
  }], config);

  // 添加路径别名
  config.resolve.alias["@"] = resolve("src");

  const { rules } = config.module;
  const { oneOf } = rules[1];
  
  // 配置 ESLint
  rules[0] = {
    test: /\.(js|vue)$/,
    enforce: "pre",
    exclude: /node_modules/,
    loader: "eslint-loader",
    options: {
      fix:true,
      emitWarning:true,
    }
  }  

  // 配置 less-loader
  oneOf.unshift(
    {
      test: /\.less$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]___[hash:base64:5]'
          },
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            // Necessary for external CSS imports to work
            // https://github.com/facebookincubator/create-react-app/issues/2677
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              }),
            ],
          },
        },
        {
          loader: require.resolve('less-loader'),
          options: {
            // theme vars, also can use theme.js instead of this.
            modifyVars: { "@brand-primary": "#1DA57A" },
          },
        },
      ]
    }
  );

  // css-modules
  oneOf.unshift(
    {
      test: /\.css$/,
      exclude: /node_modules|antd-mobile\.css/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]___[hash:base64:5]'
          },
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            // Necessary for external CSS imports to work
            // https://github.com/facebookincubator/create-react-app/issues/2677
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              }),
            ],
          },
        },
      ]
    }
  );

  // file-loader exclude
  let l = getLoader(rules, fileLoaderMatcher);
  l.exclude.push(/\.less$/);
  
  return config;
}