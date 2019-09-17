const webpackConfig = require("./webpack.config");

module.exports = (env={}) => {

  const filename = typeof(env.VERSION) === "string"
    ? `[name].${env.VERSION}.js`
    : '[name].[hash].js';

  return {
    ...webpackConfig(env),
    mode: "production",
    output: {
      filename,
    },
  };
};
