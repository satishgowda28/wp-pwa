importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.core.setCacheNameDetails({
    prefix: 'dubai-travel-diary'
});

/**
 * CSS, scripts and images from the assets directory.
 */
workbox.routing.registerRoute(/wp-content\/themes\/wp-pwa\/assets\/.+/, workbox.strategies.cacheFirst());
workbox.routing.registerRoute(/wp-content\/cache\/autoptimize\/.+/, workbox.strategies.cacheFirst());

/**
 * Cache the homepage.
 */
workbox.routing.registerRoute('/', workbox.strategies.staleWhileRevalidate());
workbox.routing.registerRoute('/#/', workbox.strategies.staleWhileRevalidate());

/**
 * Cache the response from the JSON API
 */
workbox.routing.registerRoute('/wp-json/wp/v2/posts', workbox.strategies.networkFirst());
workbox.routing.registerRoute(/\/wp-json\/wp\/v2\/posts\/.+/, workbox.strategies.staleWhileRevalidate());