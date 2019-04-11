function registerSw() {
  if (typeof window === 'undefined') {
    return false
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js', {scope: '/'})
      .then(function(reg) {
        console.log('Registration succeeded. Scope is ' + reg.scope)
        reg.showNotification('Hello!', {
          actions: [{action: 'goal', title: 'Приступим!', icon: '/assets/img/alfa-100-dnei.png'}],
          body: 'Вы только что получили первое уведомление! Смотрите',
          icon: '/assets/img/alfa-100-dnei.png',
          data: {
            href: 'https://vk.com'
          }
        }).then(() => console.log('All ok'))
      }).catch(function(error) {
        console.log('Registration failed with ' + error)
      })
  }
}

export default registerSw
