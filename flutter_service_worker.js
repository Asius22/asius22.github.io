'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "51b426f14a184a85722333524ef461ec",
"assets/assets/copertina_bibite.jpg": "05062c09093d27f1237f2373de2d265b",
"assets/assets/copertine/copertina_antipasto-512.jpg": "624f7131749ed7fcb737913858606c6d",
"assets/assets/copertine/copertina_bibite-1920.jpg": "2a5421c0cb4471a341841eae3ca1bad8",
"assets/assets/copertine/copertina_bibite-258.jpg": "cda3a6af2581369fde291637c4d3b0e4",
"assets/assets/copertine/copertina_bibite-512.jpg": "1587ea4cf7cc9af77a4f80a42ddb178b",
"assets/assets/copertine/copertina_bibite.jpg": "05062c09093d27f1237f2373de2d265b",
"assets/assets/copertine/copertina_panuozzi-1920.jpg": "36d8669a0ac21afa5497324aea8631a3",
"assets/assets/copertine/copertina_panuozzi-258.jpg": "b1c98cb4dcb44e8074f618d479fe46b8",
"assets/assets/copertine/copertina_panuozzi-512.jpg": "735342f12de8bdc64678fe6f3dc95c4d",
"assets/assets/copertine/copertina_panuozzi.jpg": "b0b0d9a31d983930533a2eeec5e23bc1",
"assets/assets/copertine/copertina_pizze-1920.jpg": "83f31b8b23ea70b4153d634780603150",
"assets/assets/copertine/copertina_pizze-258.jpg": "9d92d1bbc33cbe1e807a379146a65469",
"assets/assets/copertine/copertina_pizze-512.jpg": "a82235ae2df512d69ad2f09f98abfd17",
"assets/assets/copertine/copertina_pizze.jpg": "62ca5fe3f6969def5c6cadc309a38f8e",
"assets/assets/Google_G_Logo.png": "04032473b80b170c8eca0f45b9cb6c6d",
"assets/assets/logo_pizzeria.png": "0c58a6ee2297998844c082e4ab89309b",
"assets/assets/logo_trip.png": "bbebd88d3fa72220ff9f9b59fd30b9fd",
"assets/assets/panuozzo/baby_porchetta.jpg": "f38dee6a6d537bd1d3a02ced672e84ed",
"assets/assets/panuozzo/casa.jpg": "a782d5834edc7644c91ff7fd782805d2",
"assets/assets/panuozzo/Instagram-300x300.png": "8f7f13406454b5e8622f8511c5f72944",
"assets/assets/panuozzo/milla_fresco.jpg": "b0b0d9a31d983930533a2eeec5e23bc1",
"assets/assets/pizza/bosco.jpg": "b67ace753429a9e8fbf6fec05732c6fc",
"assets/assets/pizza/bosco_fresco.jpg": "ac2d37f12d7dc2c123ca1deee651c498",
"assets/assets/pizza/capricciosa.jpg": "d1255dd6f41aee6f7f47e46921620c38",
"assets/assets/pizza/casa.jpg": "1a1ff68e70d110aa2a1a9ed0bd071d95",
"assets/assets/pizza/casereccia.jpg": "5aab668cd4b74d63333c899870efa703",
"assets/assets/pizza/contadina.jpg": "01d2cf5b2548e681057c8605e269d4f4",
"assets/assets/pizza/fiocco.jpg": "ae27179d10e419b646f75256f378fc92",
"assets/assets/pizza/margherita.jpg": "62ca5fe3f6969def5c6cadc309a38f8e",
"assets/assets/pizza/marinara.jpg": "76d92462df948420be054272df9e9af8",
"assets/assets/pizza/milla_fresco.jpg": "59d8a2d3d42b1bf3bf72c88d8b68e3da",
"assets/assets/pizza/nuovo_gusto.jpg": "002854c18ab6dec21f2ac2ba1cfe023d",
"assets/assets/pizza/saporita_con_zucchine.jpg": "04bed18b656d4afe52b876579c29606a",
"assets/assets/pizza/tricolore.jpg": "5acea82b1824236f29c57ddce4ad724e",
"assets/assets/pizza/tris.jpg": "0d870a89b4c0d5ff4b32fcc55b02acb4",
"assets/assets/splash.png": "855526589d5b5abd71778d2ddd307577",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "18b950ee6861948af71d86dcf9e5ccf6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "ff80aa6e0f5640fe5533ae99fccfe590",
"favicon.png": "8a66ca20db9f3826afd79c37e4c4aff1",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/android-chrome-192x192.png": "bd9f0bf4589e11828643f376ff290df4",
"icons/android-chrome-512x512.png": "e9181828a3f34c6c0d59276499a7e911",
"icons/apple-touch-icon.png": "aa637738e308ddb07818a10e538f069a",
"icons/favicon-16x16.png": "fe221f98db1568a804524a82eaf024ce",
"icons/favicon-32x32.png": "eda722522f65d531b3e8c83d580de292",
"icons/Icon-192.png": "270bde1c319eb0629d19144816b5043e",
"icons/Icon-512.png": "62e718eec618d774954bbf28ace59588",
"icons/Icon-maskable-192.png": "270bde1c319eb0629d19144816b5043e",
"icons/Icon-maskable-512.png": "62e718eec618d774954bbf28ace59588",
"index.html": "45f3881878598cb87b4e7ea9997176c5",
"/": "45f3881878598cb87b4e7ea9997176c5",
"main.dart.js": "355e90b1bd67717d2ae0f222ee4c32cf",
"manifest.json": "f8594cbee77648814b93ceb766f02bfe",
"splash/img/dark-1x.png": "5d35c085806f4736cdb7e65b3649fe10",
"splash/img/dark-2x.png": "c596a3a5ece2a3c79d5c9768b5a41732",
"splash/img/dark-3x.png": "df576adcc4ec7e908493327458b01cbe",
"splash/img/dark-4x.png": "efa2122550ed65159b4fa86651ab13cc",
"splash/img/light-1x.png": "5d35c085806f4736cdb7e65b3649fe10",
"splash/img/light-2x.png": "c596a3a5ece2a3c79d5c9768b5a41732",
"splash/img/light-3x.png": "df576adcc4ec7e908493327458b01cbe",
"splash/img/light-4x.png": "efa2122550ed65159b4fa86651ab13cc",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "2e6df68c18efc965e0beb1b72c5b4ae9",
"version.json": "88c455087a3a4ad4a538bcbad84a21a7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
