self.onnotificationclick = function(event) {
  if (clients.openWindow) {
    return clients.openWindow(event.notification.data.href)
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
  var message = data.body || "Here's something you might want to check out.";
  var icon = data.icon;

  return event.waitUntil(self.registration.showNotification(title, {
      body: message,
      icon: icon,
      data: {
        href: data.href
      }
  }))

});
