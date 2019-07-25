import asyncPlugin from 'preact-cli-plugin-fast-async'
import WorkboxPlugin from 'workbox-webpack-plugin'
import path from 'path'

export default (config) => {
  asyncPlugin(config)
  console.log(`${__dirname}`)

  config.module.loaders[4].include = [
    path.resolve(__dirname, 'src', 'routes'),
    path.resolve(__dirname, 'src', 'components'),
    path.resolve(__dirname, 'node_modules', 'common')
  ]

  config.module.loaders[5].exclude = [
    path.resolve(__dirname, 'src', 'routes'),
    path.resolve(__dirname, 'src', 'components'),
    path.resolve(__dirname, 'node_modules', 'common')
  ]

  config.plugins.push(
    new WorkboxPlugin.InjectManifest({
      swSrc: './service-worker.js',
      swDest: './sw.js',
      include: [/\.html$/, /\.js$/, /\.svg$/, /\.css$/, /\.png$/, /\.ico$/]
    })
  )
}
