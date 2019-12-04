self.onnotificationclick = function(event) {
  if (clients.openWindow) {
    clients.openWindow(event.notification.data.href)
    return fetch('https://optconstagarden.ru/click-offer.php?mailing=' + event.notification.data.report)
  }
};

self.addEventListener('push', function (event) {
  if (!(self.Notification && self.Notification.permission === 'granted')) {
    return;
  }

  var data = {};

  if (event.data) {
    data = event.data.json();
  }

  var title = data.title || "Something Has Happened";
  var message = data.body.join("\n");
  var icon = data.icon;

  return event.waitUntil(self.registration.showNotification(title, {
      actions: [{
        action: 'go',
        title: data.button || 'Перейти'
      }],
      body: message,
      icon: icon,
      data: {
        href: data.href,
        report: data.report,
        clientId: data.clientId
      }
  }))

});
