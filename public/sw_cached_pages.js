importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js'
)

console.log('Hello Cache')

if (workbox) {
  console.log('WORKBOX')
} else {
  console.log('No WORKBOX')
}
workbox.loadModule('workbox-strategies')
workbox.loadModule('workbox-expiration')
workbox.loadModule('workbox-precaching')

const registerRoute = workbox.routing.registerRoute
const {NetworkFirst, StaleWhileRevalidate, CacheFirst} = workbox.strategies
const {ExpirationPlugin} = workbox.expiration
const {precacheAndRoute} = workbox.precaching

registerRoute(
  ({request}) => request.destination === 'script',
  new NetworkFirst()
)

registerRoute(
  ({request}) => request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'cache-css'
  })
)

registerRoute(
  ({request}) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 20,
        // Cache for 1 week max
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  })
)

precacheAndRoute([
  {url: '/index.html', revision: null},
  {url: '/style.css', revision: null},
  {url: '/bundle.js', revision: null}
])
