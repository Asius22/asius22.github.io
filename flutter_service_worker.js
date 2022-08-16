'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "dbfac78291ab30f8ad875f16048fe2cc",
".git/config": "d92a88a14fdcea8418bd49b22949f06c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "aff94484aa97ba61fd4a5ce27dc6f7be",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "318e7ad12e7a9821044d6c87b5053947",
".git/logs/refs/heads/main": "318e7ad12e7a9821044d6c87b5053947",
".git/logs/refs/remotes/origin/HEAD": "9a7647f73cf140d163f5dbbbd2bcaa0a",
".git/logs/refs/remotes/origin/main": "9f99fb356bf5500ccdf6c59e9b9117ca",
".git/objects/0b/4a891da6e7299c384e49a5780f9f4d7310f190": "db76109b387fdf5e61286218dade4bc3",
".git/objects/2e/4d7c1a4397e25d9af041f4a9275565f15f3216": "6015589f0fc255b348e204a66236b045",
".git/objects/a7/38b7bed9da2ab55a42507df261a5c131ebbd3a": "d71d9fdfc93cba70e76c1fb7dc7ca32a",
".git/objects/b3/a3874d43a24df3d107ebbef08eb5118ec91a40": "089c2b0200affbf5c89d95a65de36198",
".git/objects/b3/bdbcffd15d23430623f2372baa659fe616f26a": "9e76c1f80f973d408d380f99a5c35072",
".git/objects/ca/903a56419296110ecbe1295c8ea4e174fd6fdd": "d0fc1ea49e01b5f52f9ff55f01d8d023",
".git/objects/e3/54d43810e0dbffb993f718ec52582e9d5e8047": "75351ce14d48a8e3591c0cec0880b182",
".git/objects/pack/pack-c616360afe989ad03f746241c6d564131ca8be72.idx": "cd04a62aa33ff78024f8867dd84dded7",
".git/objects/pack/pack-c616360afe989ad03f746241c6d564131ca8be72.pack": "4b9922c331961d21c7eb0729b4653210",
".git/packed-refs": "29ce406b17afd2eb06d4ec06bbf64dd6",
".git/refs/heads/main": "90ffdc5f347ca387bff2209b88a9bb0e",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "90ffdc5f347ca387bff2209b88a9bb0e",
"assets/AssetManifest.json": "a909511749f47f63ac3e94fbde59963a",
"assets/assets/error.jpg": "d5a1a26944087945825596de1dc36053",
"assets/assets/logo_pizzeria.png": "36178263c1724dd18925dd7b2a2d5458",
"assets/assets/panuozzi/baby_porchetta.jpg": "f38dee6a6d537bd1d3a02ced672e84ed",
"assets/assets/panuozzi/casa.jpg": "a782d5834edc7644c91ff7fd782805d2",
"assets/assets/panuozzi/Instagram-300x300.png": "8f7f13406454b5e8622f8511c5f72944",
"assets/assets/panuozzi/milla_fresco.jpg": "b0b0d9a31d983930533a2eeec5e23bc1",
"assets/assets/pizze/bosco.jpg": "b67ace753429a9e8fbf6fec05732c6fc",
"assets/assets/pizze/bosco_fresco.jpg": "ac2d37f12d7dc2c123ca1deee651c498",
"assets/assets/pizze/capricciosa.jpg": "d1255dd6f41aee6f7f47e46921620c38",
"assets/assets/pizze/casa.jpg": "1a1ff68e70d110aa2a1a9ed0bd071d95",
"assets/assets/pizze/casereccia.jpg": "5aab668cd4b74d63333c899870efa703",
"assets/assets/pizze/contadina.jpg": "01d2cf5b2548e681057c8605e269d4f4",
"assets/assets/pizze/fiocco.jpg": "ae27179d10e419b646f75256f378fc92",
"assets/assets/pizze/margherita.jpg": "62ca5fe3f6969def5c6cadc309a38f8e",
"assets/assets/pizze/marinara.jpg": "76d92462df948420be054272df9e9af8",
"assets/assets/pizze/milla_fresco.jpg": "59d8a2d3d42b1bf3bf72c88d8b68e3da",
"assets/assets/pizze/nuovo_gusto.jpg": "002854c18ab6dec21f2ac2ba1cfe023d",
"assets/assets/pizze/saporita_con_zucchine.jpg": "04bed18b656d4afe52b876579c29606a",
"assets/assets/pizze/tricolore.jpg": "5acea82b1824236f29c57ddce4ad724e",
"assets/assets/pizze/tris.jpg": "0d870a89b4c0d5ff4b32fcc55b02acb4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/error.jpg": "d5a1a26944087945825596de1dc36053",
"assets/images/logo_pizzeria.png": "36178263c1724dd18925dd7b2a2d5458",
"assets/images/panuozzi/baby_porchetta.jpg": "f38dee6a6d537bd1d3a02ced672e84ed",
"assets/images/panuozzi/casa.jpg": "a782d5834edc7644c91ff7fd782805d2",
"assets/images/panuozzi/Instagram-300x300.png": "8f7f13406454b5e8622f8511c5f72944",
"assets/images/panuozzi/milla_fresco.jpg": "b0b0d9a31d983930533a2eeec5e23bc1",
"assets/images/pizze/bosco.jpg": "b67ace753429a9e8fbf6fec05732c6fc",
"assets/images/pizze/bosco_fresco.jpg": "ac2d37f12d7dc2c123ca1deee651c498",
"assets/images/pizze/capricciosa.jpg": "d1255dd6f41aee6f7f47e46921620c38",
"assets/images/pizze/casa.jpg": "1a1ff68e70d110aa2a1a9ed0bd071d95",
"assets/images/pizze/casereccia.jpg": "5aab668cd4b74d63333c899870efa703",
"assets/images/pizze/contadina.jpg": "01d2cf5b2548e681057c8605e269d4f4",
"assets/images/pizze/fiocco.jpg": "ae27179d10e419b646f75256f378fc92",
"assets/images/pizze/margherita.jpg": "62ca5fe3f6969def5c6cadc309a38f8e",
"assets/images/pizze/marinara.jpg": "76d92462df948420be054272df9e9af8",
"assets/images/pizze/milla_fresco.jpg": "59d8a2d3d42b1bf3bf72c88d8b68e3da",
"assets/images/pizze/nuovo_gusto.jpg": "002854c18ab6dec21f2ac2ba1cfe023d",
"assets/images/pizze/saporita_con_zucchine.jpg": "04bed18b656d4afe52b876579c29606a",
"assets/images/pizze/tricolore.jpg": "5acea82b1824236f29c57ddce4ad724e",
"assets/images/pizze/tris.jpg": "0d870a89b4c0d5ff4b32fcc55b02acb4",
"assets/NOTICES": "b969638a484b8aaebdecde334c3358fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6a0814c3d4d323ad7f3d7f4e4bc28940",
"/": "6a0814c3d4d323ad7f3d7f4e4bc28940",
"main.dart.js": "9d111f5626f2ef9510ba0bbb803c63a7",
"manifest.json": "61e3be26c940814e6277b74c82fc6d06",
"version.json": "e07d145a4470cdd45e6b53a62b558f69"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
