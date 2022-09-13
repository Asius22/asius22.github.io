'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "73a8c2fba28d6fb9188ca75c11bb241b",
".git/config": "d92a88a14fdcea8418bd49b22949f06c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6eeaf033f45e0a30c5ed50050d2759c6",
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
".git/index": "61887654b54ec75a39341388579a8e9e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "34b8d12c4f1d2dfe6268978bfec74f0a",
".git/logs/refs/heads/main": "34b8d12c4f1d2dfe6268978bfec74f0a",
".git/logs/refs/remotes/origin/HEAD": "3b1a3b2c4345d6156fe2321225ba01ba",
".git/logs/refs/remotes/origin/main": "544c2ed7f4c677d7fd100f1cbe702b95",
".git/objects/13/f3b466fdcabcda2d8822720a732efc2211ce36": "7c9782198f25a7f742b630187553e40f",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2f/160f24daede43bf501dda5f4daf2f1ba9b8e3b": "3d866cd2192140d7da2c7a42eeacf8c4",
".git/objects/3b/02275b8d34f0a5010db2f8d846519273c1c0cc": "bb796f3e9a56a96b42723f66c86564d1",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/49/146ccc1d61ca7ba54274e60c956111be84f5d4": "45ac58c4d04708b1d64afde6be68fde4",
".git/objects/4c/41410b6271b5a033306d9edd3b09dbcbdb04c9": "c2eaf007b61d358ecec0a3fcb2128849",
".git/objects/5f/941347782b559851daa97e80fcea479973dcf9": "54d73be08c9826e4062236f2f1a6f601",
".git/objects/62/139d1b3ff040ed8d013313fc33c6ed8c5ea3b5": "652e8e42bc0915c6236193b5ff4789e4",
".git/objects/68/6efb2fbc90e8c443c03d5b8e434fa63d8361bd": "f983a301449d3ef6bc9899c0ded5f205",
".git/objects/75/81e44074b38b31eedb55a69c2ca3f8c0165dcf": "7d3e3ae67e30ab79e519a0d7cf501a49",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/87/2d52f0508785a292b5b447f7133e9e82812ba1": "4a109d7812a3b67b92a0844b7d073221",
".git/objects/8f/088fb2fc87c3839dfcf09c5d7db4200022575f": "af025e9aa4dc5e15410592a009313fd8",
".git/objects/8f/d0556a01f23e0f9eb139e26d721f8c57bdf02b": "a8d4feea21ad03e3194659764360b41a",
".git/objects/91/fe2fdfb46b30189889ba9233de1aac17a48780": "a8095f871cf417330de44f030cb4d5fb",
".git/objects/94/36b2223761d3967e9ee94751912e521f985482": "74a9f164c861b9d8aeb3490bc39a7c9c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/ebbc5cd26b00204524afd579d84374186b38f9": "d72b23a8a8311023645e05749e5b72aa",
".git/objects/9c/0b8023cc59e5662189215ead2be52a039441ef": "da46aa4a1603464600f7eca2b2390142",
".git/objects/a6/36254ec6cd0df86bde880c0aea3714491f73b3": "33b18713d1d3c949108784c89a31cdf5",
".git/objects/b3/d2af7902f079fc1baf829de0ef59e861411f5f": "99786dbaa231cc3b46366d3e1794b846",
".git/objects/c3/beb4c68df0c41d5f1dff6a723d9a6cc3fd42d8": "6d678277051bc85e3a5c3c175fb3fca9",
".git/objects/c5/4e1765af50884897ccb978cd0be99d25ca3aa2": "864d97f0e92b9084eb4e29e14b676cf1",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/d2/ab10fedc2be8472e4f26d8cc6b829a268b6916": "a33d2cbe9424c3097e84d48631d1aea3",
".git/objects/d5/ea1e137b8a63d73d0ee3ce1f005cfb83b8cba2": "aa463f12bbaf3936489eb0599d4bda42",
".git/objects/d6/116c03a124bce12c5e0afdadb4f176820db7c1": "86f498258f427a4f589478391b48a93e",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e3/760f86b427b5fdddafa75761d6ac9203a9b62f": "1bc411940116f40bac9b7480ead46f7d",
".git/objects/e7/9f7721c51b6a0fe30924e5db2e17a38237e941": "393154c5d13cf92fea01a3085bf68d39",
".git/objects/f2/e68bcd47665e29eb79534bd3cd5ef9d7b0a979": "1de2755c151beda5d0346a7f725dc26c",
".git/objects/f7/85d9cfb11ec4094b33bcfccf76ac21722d1dc3": "c96b82e954c6c2b6ee5f54f3a8014553",
".git/objects/pack/pack-84d9cd68b350170edb4fb38b19e2ee953ff08c00.idx": "bb3420b3ba35f578b9541f4072b43195",
".git/objects/pack/pack-84d9cd68b350170edb4fb38b19e2ee953ff08c00.pack": "18288f2e50a35991083a02f413f226ee",
".git/ORIG_HEAD": "b011698d4baa119b4b5dc81c31d32ee9",
".git/packed-refs": "b4a64e3ca5a4bb22671e4410154de177",
".git/refs/heads/main": "b011698d4baa119b4b5dc81c31d32ee9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b011698d4baa119b4b5dc81c31d32ee9",
"assets/AssetManifest.json": "ac40a197518b141337a83fdc68c385b6",
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
"assets/assets/splash.png": "855526589d5b5abd71778d2ddd307577",
"assets/copertine/copertina_antipasto-512.jpg": "624f7131749ed7fcb737913858606c6d",
"assets/copertine/copertina_bibite-1920.jpg": "2a5421c0cb4471a341841eae3ca1bad8",
"assets/copertine/copertina_bibite-258.jpg": "cda3a6af2581369fde291637c4d3b0e4",
"assets/copertine/copertina_bibite-512.jpg": "1587ea4cf7cc9af77a4f80a42ddb178b",
"assets/copertine/copertina_bibite.jpg": "05062c09093d27f1237f2373de2d265b",
"assets/copertine/copertina_panuozzi-1920.jpg": "36d8669a0ac21afa5497324aea8631a3",
"assets/copertine/copertina_panuozzi-258.jpg": "b1c98cb4dcb44e8074f618d479fe46b8",
"assets/copertine/copertina_panuozzi-512.jpg": "735342f12de8bdc64678fe6f3dc95c4d",
"assets/copertine/copertina_panuozzi.jpg": "b0b0d9a31d983930533a2eeec5e23bc1",
"assets/copertine/copertina_pizze-1920.jpg": "83f31b8b23ea70b4153d634780603150",
"assets/copertine/copertina_pizze-258.jpg": "9d92d1bbc33cbe1e807a379146a65469",
"assets/copertine/copertina_pizze-512.jpg": "a82235ae2df512d69ad2f09f98abfd17",
"assets/copertine/copertina_pizze.jpg": "62ca5fe3f6969def5c6cadc309a38f8e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/Google_G_Logo.png": "04032473b80b170c8eca0f45b9cb6c6d",
"assets/logo_pizzeria.png": "0c58a6ee2297998844c082e4ab89309b",
"assets/logo_trip.png": "bbebd88d3fa72220ff9f9b59fd30b9fd",
"assets/NOTICES": "c03debfe7b3749027cb172241fd4d2da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/panuozzi/baby_porchetta.jpg": "f38dee6a6d537bd1d3a02ced672e84ed",
"assets/panuozzi/casa.jpg": "a782d5834edc7644c91ff7fd782805d2",
"assets/panuozzi/Instagram-300x300.png": "8f7f13406454b5e8622f8511c5f72944",
"assets/panuozzi/milla_fresco.jpg": "b0b0d9a31d983930533a2eeec5e23bc1",
"assets/pizze/bosco.jpg": "b67ace753429a9e8fbf6fec05732c6fc",
"assets/pizze/bosco_fresco.jpg": "ac2d37f12d7dc2c123ca1deee651c498",
"assets/pizze/capricciosa.jpg": "d1255dd6f41aee6f7f47e46921620c38",
"assets/pizze/casa.jpg": "1a1ff68e70d110aa2a1a9ed0bd071d95",
"assets/pizze/casereccia.jpg": "5aab668cd4b74d63333c899870efa703",
"assets/pizze/contadina.jpg": "01d2cf5b2548e681057c8605e269d4f4",
"assets/pizze/fiocco.jpg": "ae27179d10e419b646f75256f378fc92",
"assets/pizze/margherita.jpg": "62ca5fe3f6969def5c6cadc309a38f8e",
"assets/pizze/marinara.jpg": "76d92462df948420be054272df9e9af8",
"assets/pizze/milla_fresco.jpg": "59d8a2d3d42b1bf3bf72c88d8b68e3da",
"assets/pizze/nuovo_gusto.jpg": "002854c18ab6dec21f2ac2ba1cfe023d",
"assets/pizze/saporita_con_zucchine.jpg": "04bed18b656d4afe52b876579c29606a",
"assets/pizze/tricolore.jpg": "5acea82b1824236f29c57ddce4ad724e",
"assets/pizze/tris.jpg": "0d870a89b4c0d5ff4b32fcc55b02acb4",
"assets/shaders/ink_sparkle.frag": "1a6308d79e6177434198c39cb1d3a2a1",
"assets/splash.png": "855526589d5b5abd71778d2ddd307577",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"CNAME": "551ac41057b1db382d50be1e54a4cb02",
"favicon.ico": "ff80aa6e0f5640fe5533ae99fccfe590",
"favicon.png": "8a66ca20db9f3826afd79c37e4c4aff1",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-chrome-192x192.png": "bd9f0bf4589e11828643f376ff290df4",
"icons/android-chrome-512x512.png": "e9181828a3f34c6c0d59276499a7e911",
"icons/apple-touch-icon.png": "aa637738e308ddb07818a10e538f069a",
"icons/favicon-16x16.png": "fe221f98db1568a804524a82eaf024ce",
"icons/favicon-32x32.png": "eda722522f65d531b3e8c83d580de292",
"icons/Icon-192.png": "270bde1c319eb0629d19144816b5043e",
"icons/Icon-512.png": "62e718eec618d774954bbf28ace59588",
"icons/Icon-maskable-192.png": "270bde1c319eb0629d19144816b5043e",
"icons/Icon-maskable-512.png": "62e718eec618d774954bbf28ace59588",
"index.html": "653d8284e066867aab72c1900d1cb8f7",
"/": "653d8284e066867aab72c1900d1cb8f7",
"main.dart.js": "7c02becbf29b43f7f8a34ef9576c1342",
"manifest.json": "86bbed7cffd7edb3b6d67fb8be38bce6",
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
"version.json": "e07d145a4470cdd45e6b53a62b558f69"
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
