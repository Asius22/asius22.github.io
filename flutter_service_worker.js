'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cc6ef4d5b064dd137fd59e8de944a8fc",
".git/config": "d92a88a14fdcea8418bd49b22949f06c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "93591c308a444720aa38b74376abda4f",
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
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "87db78b227ac9396db2b2f79503b1e24",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0e9283262705df71bea58bd7318b69e4",
".git/logs/refs/heads/main": "0e9283262705df71bea58bd7318b69e4",
".git/logs/refs/remotes/origin/HEAD": "39dabbe19701a391933015017b9cf57b",
".git/logs/refs/remotes/origin/main": "c6e85655a3579a1565152f66e12ece77",
".git/objects/03/b5f20b326c478f0fef7fe7a6c76f7cee3834cd": "8299363b48f1a1290df406e104d8363a",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/21/a642cfe03650866b59863c75445bf31dba7ac2": "f1658d686a95812a84a86ce5bbfb5f64",
".git/objects/26/982ac2e3c8f1c7b80df0282165a4b01c9ceed7": "d22cd0055eb1a57e02f53e39e6140c5c",
".git/objects/27/25d58ed763a1211a3782f2de3706339d810b3a": "1f0a60168172a8d7a7ea430958fbfe51",
".git/objects/27/576dfcc0ca09f507c3774526b7093e23ed7030": "951d29b40700d14aa4c866ca5190bf22",
".git/objects/2c/1048ab06ba1cc5481ad33a1dcde57bf10cacd7": "ebf97b918ebbb4ab6c738f27adbbc67c",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/30/bfe5fb715585dc3e833468956c435768d18aca": "3b1b77c1ea77a4eab2de5761eb049cdd",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/66/e916ecd5669b1540286a317ec8e6c058ff549e": "8b552bb96e1bde0c8d2ae176e71656b9",
".git/objects/69/1e1c409caef17bc60fe894254af7e1d74e5cd1": "f4f3d866d26efaa4f652996c30c59b24",
".git/objects/6d/f27e750e4b727b213ffdb0e84d135283fbb817": "f6dc4cd87379626156c96d35f018af38",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/79/0dc89acc79e7ee8e66fe2442609a0bdfeaad98": "e40e1ebab6c3f85d85350af3b0447e6d",
".git/objects/83/fc91600f4b312ce93d0a8a4de23c85f553bcf2": "ddbe8f8eabbdaa8f6c666fa30a3ef6a8",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/a2/52c0dcffea506618873c590fc265d57a7aacf0": "46699bed63fb2155e5c131ca304bae20",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/950e2cb85ec23bf4ae73e9063ea1bf6d3d013f": "77c92eea5e73117c5e40d4d779a2321b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/74e567728b5b51ca38c5f1a73f71b0069883a4": "64a2f61a759e5eac46c28865b992cb60",
".git/objects/d5/778b00fcfe0516ca07c84503330441eddfee82": "0083c5a4214dac35463d5ec9b85ab14a",
".git/objects/d9/e46195c8d006aa26dfa5f91e674fafd9882788": "53ac2e3ce56bb9a38b0b6c31fae1b554",
".git/objects/e6/34011193759202104ade5a2208d47fabe6024c": "355f637e926bad59100b0e0898dc6feb",
".git/objects/e6/c4862066ee90dba24fe84874cd3f3d90196e46": "7f587e3ce9558a3985fa7d4129cb7663",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/409c9b2b6fccbaab04af43e53c2b6792704589": "003f1f49b22b3985092678618c57da6a",
".git/objects/ea/609d211da082980e5c6ace61c8d1847d9c75be": "fc2f5186d67b28fa079d5720a636d50e",
".git/objects/fb/5533a3c49686e87e796755e764247eebde7a57": "f7cb6f6ad0ab6dc842b488baabeea6a6",
".git/objects/pack/pack-3081b7a56706053d2b1fde2df02c3540eb8bec02.idx": "f01fcf4b886eafb94e3636de58dbd729",
".git/objects/pack/pack-3081b7a56706053d2b1fde2df02c3540eb8bec02.pack": "f34724ef3e2c780f3326aa3634109b5c",
".git/objects/pack/pack-3081b7a56706053d2b1fde2df02c3540eb8bec02.rev": "3124ea9b87df5984b64cd3a1c86c182b",
".git/ORIG_HEAD": "16879c7570dd033b481759ca5a166985",
".git/packed-refs": "f05dc213a7d3c8bc689e64b116fde91b",
".git/refs/heads/main": "47f7ecd9af34f754e4da4c5e5b279f28",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "47f7ecd9af34f754e4da4c5e5b279f28",
"assets/AssetManifest.bin": "4804a222b6597bc86518fc2d69fdcc50",
"assets/AssetManifest.json": "cdf4de80aa75b32c67b1e951c3ee7dca",
"assets/assets/copertina_bibite.jpg": "05062c09093d27f1237f2373de2d265b",
"assets/assets/Google_G_Logo.png": "04032473b80b170c8eca0f45b9cb6c6d",
"assets/assets/logo_pizzeria.png": "0c58a6ee2297998844c082e4ab89309b",
"assets/assets/logo_trip.png": "bbebd88d3fa72220ff9f9b59fd30b9fd",
"assets/assets/splash.png": "855526589d5b5abd71778d2ddd307577",
"assets/copertina_bibite.jpg": "05062c09093d27f1237f2373de2d265b",
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
"assets/fonts/MaterialIcons-Regular.otf": "db23232037dffe7e12e8216f554bf295",
"assets/Google_G_Logo.png": "04032473b80b170c8eca0f45b9cb6c6d",
"assets/logo_pizzeria.png": "0c58a6ee2297998844c082e4ab89309b",
"assets/logo_trip.png": "bbebd88d3fa72220ff9f9b59fd30b9fd",
"assets/NOTICES": "09bf72dd0d725d79e99d49fa67d82d9b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/splash.png": "855526589d5b5abd71778d2ddd307577",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"CNAME": "551ac41057b1db382d50be1e54a4cb02",
"favicon.ico": "ff80aa6e0f5640fe5533ae99fccfe590",
"favicon.png": "8a66ca20db9f3826afd79c37e4c4aff1",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-chrome-192x192.png": "bd9f0bf4589e11828643f376ff290df4",
"icons/android-chrome-512x512.png": "e9181828a3f34c6c0d59276499a7e911",
"icons/apple-touch-icon.png": "aa637738e308ddb07818a10e538f069a",
"icons/favicon-16x16.png": "fe221f98db1568a804524a82eaf024ce",
"icons/favicon-32x32.png": "eda722522f65d531b3e8c83d580de292",
"icons/Icon-192.png": "270bde1c319eb0629d19144816b5043e",
"icons/Icon-512.png": "62e718eec618d774954bbf28ace59588",
"icons/Icon-maskable-192.png": "270bde1c319eb0629d19144816b5043e",
"icons/Icon-maskable-512.png": "62e718eec618d774954bbf28ace59588",
"index.html": "85fe4a79b09401f4c8cdab9587f5cab6",
"/": "85fe4a79b09401f4c8cdab9587f5cab6",
"main.dart.js": "8543b17d70d8ea7a931f7e12850afeda",
"manifest.json": "dbdf4e38754e5a228d2be1fcd75151e9",
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
"version.json": "e07d145a4470cdd45e6b53a62b558f69"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
