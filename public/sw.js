// Robust Service Worker for Performance Optimization
const CACHE_NAME = 'plusomar-v3';
const MAX_CACHE_SIZE = 50; // Limit cache entries

console.log('Service Worker script loaded');

// Install event - activate immediately
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

// Activate event - clean up and claim clients
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    (async () => {
      try {
        // Clean up old caches
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
        
        // Claim all clients
        await self.clients.claim();
        console.log('Service Worker activated and claimed clients');
      } catch (error) {
        console.error('Service Worker activation failed:', error);
      }
    })()
  );
});

// Fetch event - Network first with cache fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip chrome-extension and non-http requests
  if (!url.protocol.startsWith('http')) return;
  
  // Skip service worker itself
  if (url.pathname.endsWith('sw.js')) return;
  
  // Skip external domains (but allow same-origin)
  if (url.origin !== location.origin) return;

  event.respondWith(
    (async () => {
      try {
        // Try network first for fresh content
        const networkResponse = await fetch(request);
        
        if (networkResponse && networkResponse.status === 200) {
          // Cache successful responses (clone before caching)
          const responseToCache = networkResponse.clone();
          
          try {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, responseToCache);
            
            // Limit cache size
            const keys = await cache.keys();
            if (keys.length > MAX_CACHE_SIZE) {
              await cache.delete(keys[0]); // Remove oldest entry
            }
          } catch (cacheError) {
            console.warn('Failed to cache response:', cacheError);
          }
        }
        
        return networkResponse;
        
      } catch (networkError) {
        console.log('Network failed, trying cache:', request.url);
        
        // Network failed, try cache
        try {
          const cachedResponse = await caches.match(request);
          if (cachedResponse) {
            return cachedResponse;
          }
        } catch (cacheError) {
          console.warn('Cache lookup failed:', cacheError);
        }
        
        // If it's a navigation request and everything failed, return a basic offline page
        if (request.mode === 'navigate') {
          return new Response(
            `<!DOCTYPE html>
            <html>
            <head>
              <title>Offline - Plusomar</title>
              <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #212121; color: white; }
                h1 { color: #d26249; }
              </style>
            </head>
            <body>
              <h1>You're Offline</h1>
              <p>Please check your internet connection and try again.</p>
              <button onclick="window.location.reload()">Retry</button>
            </body>
            </html>`,
            { 
              status: 200,
              headers: { 'Content-Type': 'text/html; charset=utf-8' }
            }
          );
        }
        
        // For other requests, just throw the network error
        throw networkError;
      }
    })()
  );
});

// Handle service worker messages
self.addEventListener('message', (event) => {
  console.log('SW received message:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Error handling
self.addEventListener('error', (event) => {
  console.error('Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker unhandled rejection:', event.reason);
});
