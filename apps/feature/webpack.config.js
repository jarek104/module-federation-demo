const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  ['@mfd/shell-services']);

module.exports = {
  output: {
    uniqueName: "feature",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "feature",
      filename: "remoteEntry.js",
      exposes: {
          './Module': './apps/feature/src/app/app.module.ts',
          './WidgetComponent': './apps/feature/src/app/widget/widget.component.ts',
      },        
      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@mfd/shell-services": { singleton: true },

        ...sharedMappings.getDescriptors()
      })
        
    }),
    sharedMappings.getPlugin()
  ],
};
