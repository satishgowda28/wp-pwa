importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.core.setCacheNameDetails({
    prefix: 'dubai-travel-diary'
});

/**
 * CSS, scripts and images from the assets directory.
 */
workbox.routing.registerRoute(/wp-content\/themes\/wp-pwa\/assets\/.+/, workbox.strategies.cacheFirst());

/**
 * Cache the homepage.
 */
workbox.routing.registerRoute('/', workbox.strategies.staleWhileRevalidate());