import asyncPlugin from 'preact-cli-plugin-fast-async'
import preactCliSwPrecachePlugin from 'preact-cli-sw-precache'

export default (config) => {
  const precacheConfig = {
    staticFileGlobs: [
      'build/*.css',
      'build/*.js'
    ],
    stripPrefix: 'build/',
    runtimeCaching: []
  }

  asyncPlugin(config)
  return preactCliSwPrecachePlugin(config, precacheConfig)
}
