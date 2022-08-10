'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "869049e7cf87213af727a8d02b242d39",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f7c974b55febfe3b9654bb5225c49d51",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "ffc7676c8048c6ff019803c65899a5f3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a713442dbde9427a6ff783e4f4bbec45",
".git/logs/refs/heads/master": "a713442dbde9427a6ff783e4f4bbec45",
".git/logs/refs/remotes/origin/main": "c452925ae12f5a253f2dde327c46496a",
".git/logs/refs/remotes/origin/master": "ba27f1002660c3d25f4474a398a634da",
".git/objects/0d/fea38153b0133fb9197d482c648c5100ab3fb8": "8d5a893954b34125c2ba942507dec6c7",
".git/objects/18/805a6189b6b6be3ab5fc718e5ba93297c549cb": "9aabaab698da781f42769069c9e7fd2b",
".git/objects/20/a8e2b14730884abc52ceb79f16cbcbf36279d1": "662242286edae3919b91af3cbb94fa9c",
".git/objects/20/c782151c44cca22754b09708973fec7965b0ef": "685a9afb826bf3e06806020768491ed4",
".git/objects/21/7892ecd00171b5c0db6c1f6f9dde3780ac111e": "f19970a200d1c27e9564b653d28fffce",
".git/objects/21/acee201612a92e9bbbe2f4b12c83ada985f511": "e15c91552138a77be6754a40d08e57db",
".git/objects/25/92c4688a888b728ffa8afc033593623e01644b": "4af5b54f09f045d11f7e27bc555dc1e0",
".git/objects/44/249d461e146fb1010631684f2876d6817046bd": "9bcfdb0a2b1f38db6633710ae05dfdf9",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/4f/6188031fa8aafdd7f0848ad9f3471b15fc8665": "5f1449dd6c0e3f74338b043c3b5ed4a6",
".git/objects/4f/d3631b4dc7b9b0160b91cacadc5d1bc1d80038": "6d67d12f1ee820582d82726188b91906",
".git/objects/55/cb39bfbfb7bd577fd5ac297b67c4369ba8054e": "5d70707b8ecbccaf677f3ab3a6e8a894",
".git/objects/5f/5e69e0a1a5187082153ec8e1e14671e807e071": "26ab28079996ce88532851ea0f436138",
".git/objects/64/a13e9a07a0b6509e448013eb35f7f655291402": "0a634c1aca6127f02d8ede66b7629a83",
".git/objects/6f/bf9597b4cd120fd49cc48078e092ec95ef0d23": "87c38660d1d249a6ac6ce07753228cf3",
".git/objects/74/37dd66048cca92060bb14902cf41707a17f30b": "ca7783710befba26dc77c9ab27b749b0",
".git/objects/74/c80c1071905902645c02c85b741b66b44d9ae8": "94c10fcfa85679059faa7a795b49ac51",
".git/objects/76/c4efa2cc64efea29176bd38fb0bdd735df911d": "d6ad5c4bffd4e92596934b78cc8fc9b8",
".git/objects/79/b91660dcd3537cdabad99b70128d5b167efbb0": "8d038734f1b40e5a2427d2ed3da9c7e2",
".git/objects/86/07a49fbc41dec6d8b3f851e7d2fb5a78378bdb": "35289458607c029e3512eb44bc00cee8",
".git/objects/a3/552beee97f3259e0ed48491b07f3c123847d92": "6b33dc4b0353ba9326f9142bae59ba38",
".git/objects/a7/c756e9e9dce3490d4376f63fcdf337741c93fc": "b88493cdefb35f539a23382d9f3463ac",
".git/objects/c6/6aee6e4fd7546e7ddd4673749ad674fd5c5dba": "1338da341583b775306cb672dbb5d99f",
".git/objects/da/e5998551116d47d4ef791c960d554901a54710": "01d06c222f4e4c196a7953ec87ec8976",
".git/objects/f2/2c5224f03b7e889aaa6dbbba6cf87f346ea138": "250fa110b882bb073f5049fec30dd96e",
".git/objects/f5/122eeaeb8ef13db2fa35acc28f0914c850aede": "8a4da928ffedc230ec5cf711678e3729",
".git/objects/f6/533a98025197fcde9decb798ae6f43c2d9b282": "725ae094928c99985f95354771146535",
".git/objects/fa/3c2be383376ed9e57301d55a52c905c55be5cb": "43d0444d36c3fb4a078e16c39e797a98",
".git/objects/pack/pack-3938cddcdb849746804ceaa7d804787d6cf49ae9.pack": "95c17061eeee00f1be5c0688d7362d13",
".git/objects/pack/pack-c6e761c76a54c575b4f50bd7a7ce31461ae324c0.idx": "506c401e7b381c99a8c2bb256a71621d",
".git/objects/pack/pack-c6e761c76a54c575b4f50bd7a7ce31461ae324c0.pack": "6673de9ca581f000444f0813e682c576",
".git/objects/pack/pack-fe2075e81d527c275e2b7af01c1f47d2fe423d4b.idx": "5680557bfd1d021bb8d619c5be7e71d8",
".git/objects/pack/pack-fe2075e81d527c275e2b7af01c1f47d2fe423d4b.pack": "3bb7b582817fe0d263512cca5a1ecb95",
".git/ORIG_HEAD": "96bab6adb54e6292f2942cc8addefc22",
".git/refs/heads/main": "7055790ec2554f88bd876d603bc1fd0e",
".git/refs/heads/master": "7bd8664c6c92c26ff0d2121f0c164efb",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "7055790ec2554f88bd876d603bc1fd0e",
".git/refs/remotes/origin/master": "7bd8664c6c92c26ff0d2121f0c164efb",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "95adb62648281bcfee32d708b54143a6",
"/": "95adb62648281bcfee32d708b54143a6",
"main.dart.js": "27b4331c432c2d24048734979efeb80a",
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
