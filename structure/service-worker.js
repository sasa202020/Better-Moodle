importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js");
workox.routing.registerRoute(({ request }) => request.destination === "image", new workbox.strategies.NetworkFirst());
