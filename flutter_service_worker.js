'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/AUTO_MERGE": "fa7285814e2d87db103bc1a87edcc6db",
".git/COMMIT_EDITMSG": "64c233376efdaa7962388a5d0d7c3a82",
".git/config": "d92a88a14fdcea8418bd49b22949f06c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9ab7de2c66bea714646533cbecb56795",
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
".git/index": "f94071b2fdfdc89f09b779575bd6ff03",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9afa228ed72ca3a3bfa51bb0d9ca2f67",
".git/logs/refs/heads/main": "9afa228ed72ca3a3bfa51bb0d9ca2f67",
".git/logs/refs/remotes/origin/HEAD": "fafc284f986021ff7024c8a4c0005cfd",
".git/logs/refs/remotes/origin/main": "cc5f13f612c35614d8db64d097e19fe4",
".git/MERGE_HEAD": "71630234fb27d23bdec297faaed2e88e",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/MERGE_MSG": "6e51044c204e2acf4971670df3b803fd",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/4c959c703fd5c791a417781910e2f737aeb678": "cdc0cedc400844c3b8739a1fb20da5de",
".git/objects/22/860dd1639100e1e54ed3f7be10f9310ae8c7b9": "902ca19cf2ebd42f7bffc859eabeb6f8",
".git/objects/23/1412d18dc8ce35b1ad297e802133204d8f27fc": "8a5be1651828614c8fefd07cfe960a77",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/4c470753a01cb69207aef60221552618614e6d": "0dfef78c2ac717d0a5a4ebff93e2e391",
".git/objects/31/6f8d8fad2b4c2db281cf6ad9d4c7fbea0e0d84": "d24e2e3206c12d71d204df1f51340ce4",
".git/objects/3e/f4452c5dcb51a2ebc7cf393abf0151c6b10843": "3c437841ed10403667dfb2259328df53",
".git/objects/3f/2edb90f03cfcef45dbf3d764f6ace7070d1576": "dd2fd700e4632592e20682d448c03276",
".git/objects/43/2bf20d4112d0c40ce0b01d751d5f23866449e8": "f0a778271529be3c5966796d61c4e902",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/49/31e1e6dfc489d8d4bc060c5de2b3db1d21f1c4": "72ddfd215c08d9e1198ab24ebdfea45e",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/fa3a502184405cfd7fa2ea8f83ebe242ec6043": "9575fdb68b6ef4ddd54ec1a502445aef",
".git/objects/55/c7afc47e786ecff9251293aa464e5d269c2eea": "55eb3bce2cf91fa1128fa3678d59a354",
".git/objects/61/2de2759ce2be2d96be705282f462afe29bc41b": "175899f4820a0d5cedb45a47a7771198",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/8a/deaa70f3e01b7d27bc844ec797784da67659f8": "cd7906e081be522da057727127ad360f",
".git/objects/af/d9b5023fc2429c5e69cb6558e71cbaf61adc34": "94afd1d80caab45be88cc44fb9525c5d",
".git/objects/be/937c14a30c4639c21496c0de52497517d9eade": "fe6f97481a2210c6ff93e53c89774e03",
".git/objects/d8/ab05bed1a4a69c82bf0a82b55f54db763e7709": "9b1ee04cf469c5084500175e90dad49a",
".git/objects/e8/14120900d30de14eb5db6e433b6ee815f4db50": "fd166619b50b69870245487542c481be",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ed/7943b29723ccd6245816d9465db58e96a136a4": "b01394c557bfb0dd6bb56095a0ed02eb",
".git/objects/f4/df3b9af0b55c4365fb042b9b2c368a9712f924": "84cb013a5860c92103907f6415992de7",
".git/objects/ff/ba4c5e19045f2fa25222b573be827204172c04": "de2c97fca9f3127d5c73734f397d3438",
".git/objects/pack/pack-6680f66a3ef2b986a8e7931d0199c804904654e5.idx": "3bb9499d856745e3589fa9377b10dde1",
".git/objects/pack/pack-6680f66a3ef2b986a8e7931d0199c804904654e5.pack": "0ab287b80bc628d529a0b0ef666942fa",
".git/ORIG_HEAD": "a6b095fe85e32e4aa9dab5c7ae50eda6",
".git/packed-refs": "de5fed678a90c18fd6342803e101bc5b",
".git/refs/heads/main": "a6b095fe85e32e4aa9dab5c7ae50eda6",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "71630234fb27d23bdec297faaed2e88e",
"assets/AssetManifest.json": "a909511749f47f63ac3e94fbde59963a",
"assets/assets/error.jpg": "d5a1a26944087945825596de1dc36053",
"assets/assets/logo_pizzeria.png": "0697ff78a2039331f3494ddcc0fcebe9",
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
"assets/NOTICES": "4b0d8edb202552a7f49a83784eb0f919",
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
"index.html": "a4156fda59f0f63460d1b38fa2ad41f1",
"/": "a4156fda59f0f63460d1b38fa2ad41f1",
"main.dart.js": "7dba21ba4824a484da1e26c05e49c670",
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
