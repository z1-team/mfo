import { urlBase64ToUint8Array } from './utils'
import api from './api'

function pushSubscribe(clientId) {
  const vapidPublicKey = 'BDRyRCCpFbCcEbrGnyKLm8CekYwv9GC4mdWoKWR6nyuTK-ZhJJ-p8opMhGz76YYUvQ2p40Z6eS_C_t3Ntff7Lrk'
  const convertedKey = urlBase64ToUint8Array(vapidPublicKey)

  if (!('serviceWorker' in navigator)) {
    return false
  }

  if (!('PushManager' in window)) {
    return false
  }

  navigator.serviceWorker.ready.then((registration) => {
    return registration.pushManager.getSubscription()
      .then((subscription) => {
        if (subscription) {
          return subscription
        }
        return registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: convertedKey
        })
      })
  }).then((subscription) => api.pushSubscribers.add(subscription, clientId))
}

export default pushSubscribe
