const mix = require("laravel-mix");
const path = require("path");

const isProd = process.env.NODE_ENV === "production";
const assetsPath = path.resolve(__dirname + "/resources/js");
const publicPath = path.resolve(__dirname + "/public");

mix.webpackConfig({
    output: {
        chunkFilename: isProd
            ? "js/[contenthash].chunk.js"
            : "js/[name].chunk.js"
    },
    resolve: {
        alias: {
            "@app": assetsPath + "/src",
            "@public": publicPath
        }
    }
});

mix.js("resources/js/src/main.js", "public/js");
mix.sass("resources/sass/main.scss", "public/css");
