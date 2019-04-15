import asyncPlugin from 'preact-cli-plugin-fast-async'
import WorkboxPlugin from 'workbox-webpack-plugin'

export default (config) => {
  asyncPlugin(config)
  config.plugins.push(
    new WorkboxPlugin.InjectManifest({
      swSrc: './service-worker.js',
      swDest: './sw.js',
      include: [/\.html$/, /\.js$/, /\.svg$/, /\.css$/, /\.png$/, /\.ico$/]
    })
  )
}
