function initCounter() {
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(50978069, "init", {
    id:50978069,
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
  });
}

if (process.env.NODE_ENV === 'production') {
  if (
    typeof window !== 'undefined'
    && !window.location.href.match(/\/\/dev\./)
  ) {
    initCounter()
  }
} else {
  console.log('!!!WELCOME TO DEV VERSION OF APP!!!')
}
