
var ManifestPlugin = require('webpack-manifest-plugin');
var path = require( "path" );

module.exports = {
    plugins: [
      new ManifestPlugin()
    ]
};
