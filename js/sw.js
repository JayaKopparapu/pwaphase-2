this.addEventListener('install',function(event){
  event.waitUntil(
    caches.open('mycache')
    .then(function(e){
      e.addAll([
        '/index.html',
        //'css/index.css'
        '/form.html',
        //'js/main.js',
        // 'css/form.css',
        // 'js/sw.js',
         '/resume.html'
        // 'css/resume.css',
        // 'js/resume.js',
        // 'js/get.js',
        // 'images/logo.svg',
        // 'images/resumeicon.jpg',
        // 'images/woman.svg',
        // 'icons/manifest.json'
      ])
    })
  )
})
// Fetch Event
this.addEventListener('fetch',function(event){
  event.respondWith(
    caches.open('mycache')
    .then(function(cache){
      return cache.match(event.request)
      .then(function(result){
        return result || fetch(event.request)
        .then(function(result){
          cache.put(event.request,result.clone());
          return result;
        })
      })
    })
  )
})
