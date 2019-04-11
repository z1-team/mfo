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
  var message = data.message || "Here's something you might want to check out.";
  var icon = "/assets/img/alfa-100-dnei.png";

  var notification = new self.Notification(title, {
    body: message,
    tag: 'simple-push-demo-notification',
    icon: icon
  });

  notification.addEventListener('click', function() {
    if (clients.openWindow) {
      clients.openWindow('https://example.blog.com/2015/03/04/something-new.html');
    }
  });
});
