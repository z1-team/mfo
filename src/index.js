import './style/index.scss'
import App from './components/app'
import registerSw from './sw-register'
import * as Sentry from '@sentry/browser'

if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({dsn: "https://92918e373bfb469289f4bc514693ab0e@sentry.io/1862052"})
  }
}

registerSw()

export default App
