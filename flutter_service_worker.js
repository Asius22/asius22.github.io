'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "22b2b608b430edd8186fbce887bf9394",
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
".git/index": "636be38624ed397c51ffec53f8c4da8f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "152ccc07bd374399500103447d73a1f9",
".git/logs/refs/heads/main": "152ccc07bd374399500103447d73a1f9",
".git/logs/refs/remotes/origin/HEAD": "9a7647f73cf140d163f5dbbbd2bcaa0a",
".git/logs/refs/remotes/origin/main": "e42a1eddd19ec6ef92d6381067d5a5ac",
".git/objects/02/708f078538bbc2e839edbca893720661f9e7eb": "6f030500c01e0ab177cc27d925e7139b",
".git/objects/0b/4a891da6e7299c384e49a5780f9f4d7310f190": "db76109b387fdf5e61286218dade4bc3",
".git/objects/15/949edca9b0b7b05b94c1c531f94c3d9f7bb5ca": "a21aec3a21452ed10251c6d23c777620",
".git/objects/28/473c27167eaf5f2424deebe0a315a8fa0da55a": "7d402df8209239884e2a98433c5cf39f",
".git/objects/2e/4d7c1a4397e25d9af041f4a9275565f15f3216": "6015589f0fc255b348e204a66236b045",
".git/objects/31/e25ac14cf90ab6b624be36eb93bbecb44fad44": "f4440bb783bf4ee7c3a57271043f90c9",
".git/objects/3d/b76bb205513352566103f3bf7706ccd3b79c95": "b9cded680e2b5d39fa7be5f1bdb88846",
".git/objects/3e/9bba19f064d1f423b3d4a227ffc4640240eccd": "0eb7ede649262a5edc4295dd4ff7d0fc",
".git/objects/49/fb13fc8029291af5e57e5dd19a832f64c6e238": "47b1686d4631a87b0763a4ef82fbee6b",
".git/objects/4c/4f696a0f266689cc19ae58eb29b882e6c2e509": "cc13b3e2656882eca47bc268f0cf8a6c",
".git/objects/52/f49c66670b50bdbe912526382870c72a1c9e03": "881a32055a34facd3b064329f0819411",
".git/objects/5b/4c628d9790b4c80af8b668a107f21ffd802893": "ca110a6538f948109a21320f35e072c8",
".git/objects/6d/a2a9eb7aa9fcfc7b29f01e6fd5932d7cbaf907": "f83751debbb62d20dd1004e576b04f51",
".git/objects/7a/3e7007870589679858b32a83801728d830e44e": "7101d2dea95927ada3334a2284b651d0",
".git/objects/7b/5061c3e84c6f4413c5c112f3df5c29ea98a5fb": "9a3669234d0db4e8d016c189879d6d60",
".git/objects/7f/cfe5aad104487617a7a83e6230d018d3e76d75": "b9e063fa46c49511f5a241630c4764a6",
".git/objects/85/825242c008ee4c6743072c7c19968ade4fcf54": "a73ea3e4e59fdf8a2cbcfa5194c1d316",
".git/objects/86/85e7dc83bb7169674a5ee1bdb0ef935998519a": "42fadafdcc9d0f926da606ea83fb16ff",
".git/objects/89/c8fb778a2340e118c9ba1866ccdf315fcc58d7": "64342e740c49d15c0d2240471fbc767d",
".git/objects/8a/ffb7f5c6822b10757eaec42fd1a3b0c6896be8": "5346c5c12f37810ebcbf5ac933b025b6",
".git/objects/8e/f090ac051443d99496f967cfd9fd3d3416eb4e": "1e1cfd4233b2b8acc8f9740d653373e9",
".git/objects/90/b42b8435249c1fddb8463548431eeb52d98446": "18311c1e341eab4d35531034faced39a",
".git/objects/a6/d375cd478f98086e4d2c5d140b5fd595de4664": "7e15c0b72ae1af2aa4dc2fe9a4d78934",
".git/objects/a7/38b7bed9da2ab55a42507df261a5c131ebbd3a": "d71d9fdfc93cba70e76c1fb7dc7ca32a",
".git/objects/ab/698346873dbf4687b7500bd177f9467a13de51": "26ab69b8ddf083a8b026cdbd42081799",
".git/objects/ae/0d445f6d797a3318072e30b642f7efe923644b": "ac67d6cf4360dcfeefa80d41e7706d15",
".git/objects/b3/a3874d43a24df3d107ebbef08eb5118ec91a40": "089c2b0200affbf5c89d95a65de36198",
".git/objects/b3/bdbcffd15d23430623f2372baa659fe616f26a": "9e76c1f80f973d408d380f99a5c35072",
".git/objects/b4/d04e7aeb0bce092aea7d2267c93de08ba9d6a7": "008db9663221f70c523fea480cc64d21",
".git/objects/b8/ace97b2c88c3d176f7c1ccacc341aca19433ad": "5243bd47a08004eac37b6fc4f7abc1f8",
".git/objects/ba/66cf38891fbbbb92a2b6c00b2c777fe4924587": "67d7f3cdba5a0cf38a4b577566f4b033",
".git/objects/c2/3b8ca88b9327eabb389a1ca662e1950b9483d9": "8c784902470dc192adf49d4ef6c74f80",
".git/objects/ca/903a56419296110ecbe1295c8ea4e174fd6fdd": "d0fc1ea49e01b5f52f9ff55f01d8d023",
".git/objects/d8/23951292ee76cf188e30b231c0fc8cfcaa4bfc": "4011c4be5b57c2d439b5a744e5627a5f",
".git/objects/d8/f883947dda9ac97723c215b2548f3e349501fc": "fe48594e4daf5e495810587f3356ebdc",
".git/objects/e3/54d43810e0dbffb993f718ec52582e9d5e8047": "75351ce14d48a8e3591c0cec0880b182",
".git/objects/pack/pack-c616360afe989ad03f746241c6d564131ca8be72.idx": "cd04a62aa33ff78024f8867dd84dded7",
".git/objects/pack/pack-c616360afe989ad03f746241c6d564131ca8be72.pack": "4b9922c331961d21c7eb0729b4653210",
".git/packed-refs": "29ce406b17afd2eb06d4ec06bbf64dd6",
".git/refs/heads/main": "83fdbbe2a40014a32be204a3c6d6b8a0",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c58c27d2cc50fe56984d60d8a5c02090",
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
"index.html": "018a20d02c60a2f1f28c310c9b137817",
"/": "018a20d02c60a2f1f28c310c9b137817",
"main.dart.js": "910b9675a9826ecbb88272d3df91b3ce",
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
