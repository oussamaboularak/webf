'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "73f9c315f7e11150193928cb2f037b27",
".git/config": "6657276f8373814126a2bcad641c8c96",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "518740d28cd8e4fd290ded14adc6e7f2",
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
".git/index": "b40798d66bb4a4fa6375bbd17e32917f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9b1a827efad7c71aa9f1d2e8eab02267",
".git/logs/refs/heads/main": "9b1a827efad7c71aa9f1d2e8eab02267",
".git/logs/refs/remotes/origin/main": "e2629b3dd172534c184dce756ec40fb4",
".git/objects/01/a6a4c6490e3ab22b7ca541839f336d36f79dfa": "72a1b371802a6b30d5e947289ee832ee",
".git/objects/02/40ef9722ea3d7209d7159bba05f4a93f935b13": "4760f3a4f9b72a58edd6de57c0c7e8dd",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/59965fd58f5939e525a8e50812c2f5686869a9": "b2d5796b6260719c21c966126c59a2cf",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/10/2de65dc9ed651dd2e1ab2f4bf6099636177fd1": "4c2cd8540b156c50e7f3aeb2d485bdd8",
".git/objects/14/8c4af728538ce3a332a31d335823a94e242ff8": "7e3e9abf2ef2221859da77eca53f8fb1",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/8c36ab9d151da63aae1dbdfca385bf6b7fcd98": "132944217f9ac8e0ed4e68ea0e1f40ad",
".git/objects/22/fdf130a6c31ab3c0c597be3c87521581a90207": "4ae330d4850e88a538c39ea47ecc25c8",
".git/objects/28/10baba09e694902326d19f7b02fd615e4c2805": "6bb215b1edd3106bd25a11e79fa5414e",
".git/objects/2f/6091578ded759a455c071b4f8579ab7eb8e2d7": "afb1a2fb4d978fca774f8c43d6d5af6a",
".git/objects/2f/7b7da5c39ce4e49f7a1a8d488a30efdc29c871": "4e1b87fd06bf6bc0a6f5385b5cb63fba",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/a8c45785c79cd4ac44f74b2f3d625860a02de5": "9f432ad6b5edc19d9c660a99da845cff",
".git/objects/3d/822e622f265256ded2880d4e875e81c2c1a45a": "a208cc41ac559c0944bd26f914603e93",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/0b50c06f1e719e1421bbd57e28e7b57a3e0e3b": "da856bfa3653a91e8328bfdbaaf8529e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/54ec931b7c4e9c7af44ce4ef48aa68dfcf783c": "6cd17482f7020c895dc36b4cd2139901",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/55/4e045996ab2b28c923d36b942d3d7ae8b842c7": "d55e0eb56151f662dc6b84e5a87df930",
".git/objects/60/418c351d999a7a378c676502e21fd0247e73a3": "dadcf0f095d377feb444d09162ee06b9",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6b/ff74fe853007948651abf5a3bf2b905ad4ef6e": "9f3627422a38ba838c75ea5357d877d6",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/74/d221f0fa97d5b522beb5aac2def137b86dede8": "c8598a20df3503d6436b605ec28f8080",
".git/objects/79/03f309644902132d87c90d725c9be74548b0d5": "a975304e556ca23cb106442ec4e808fd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/706a46fd6fa2dec1524441ade4e43c9374b2e5": "ef0d7dd123bc02aa252a8f655740205f",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/96/064288ea069d3effcc6683352a9b02c21bcc95": "ca12f11b603debe80cd5341c5b91166f",
".git/objects/99/5230c1bc80c31159654deb4d75c79736cc6b46": "ccf641375a6a5da36ad6b867d6f0d7de",
".git/objects/9a/492596114c7aafce4d8e6202eb2cbdf19da3c1": "e3082b39d3212330fb7c31010d3ab8bb",
".git/objects/9f/3c311ce789e7ce8d43578ca57716629e2cfc05": "42ba5bd26d02d3bdc956a57a13e6ff03",
".git/objects/9f/a704be9e010b9a029add0410f2d1b17e090bce": "240c5e039a37ebf0aab6ab37069ca957",
".git/objects/a6/b92766b6765ffa4ad5f6686f1583d298178998": "728859bbe4a80f78dd8cdc65e7eab00d",
".git/objects/ad/9f6dc86c8c493fed4dd878a2e8fdf2ada04f03": "b7bbbb4d84f57e868a392102a7c155ef",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/a73bcb305282dd2a8d81e5efa66bbd6557a594": "479871a54193118026ffb13b7c0a029d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/8b733a3163cf2021b88f590f646998d994c859": "33c89f1ebd93fa2a49a109f498dab03e",
".git/objects/c2/7dc53b0201c91a17bbef92e3ee899cf32294d6": "2ecd1c16489a1eb02b910da98d9d2c48",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/c96cb1785698d9040371c8535a92276896738c": "34c99fb498726ef59dde0dfc4f664594",
".git/objects/d8/d7debdaad6d1939c00cd28407dfd26d687650a": "bea730258d6b4908ad31af7d1992d4ae",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/5152746060ba221278bc9b3e04185a75fa5c51": "b9d1819e758bba43e0fc19d3a3573cf3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/034dec75d6e229502c4d52b5585152ec524ed0": "176bc7bab645ffacaf9c78d5fc634450",
".git/objects/f1/e7fbe10c88a9db444f195a6c68e0ae740bac92": "0ed96d8b9d42b8cb0bcbfac09c345eda",
".git/refs/heads/main": "d98fd8f9ce89244b92e59281f86a784f",
".git/refs/remotes/origin/main": "d98fd8f9ce89244b92e59281f86a784f",
"assets/AssetManifest.bin": "3afbba4ce8a3da5254d920f1d7bb9e0c",
"assets/AssetManifest.json": "ccc6814f84ea52d0c3f38f9da9203226",
"assets/assets/images/down.png": "aadb3d2cc7dd2f96e75c16ef4e9bb8dc",
"assets/assets/images/facebook.png": "3b149a0e5a55d5a92f114f091364de40",
"assets/assets/images/github.png": "73f6facb5690334ce00e33382c60bda6",
"assets/assets/images/google.png": "66047864288a9df7b69c6bc3c94d16f5",
"assets/assets/images/h1.png": "b92ada0bfae7d8be5d4078523972c3dc",
"assets/assets/images/hero.png": "ca3b9ed10530fd502b5a30ffde72dcc4",
"assets/assets/images/hero1.png": "f0214c00a0df2d8683d2f135afe348f7",
"assets/assets/images/hero2.png": "420c77bbb47c9a1ec61f3f502615f07f",
"assets/assets/images/hero3.png": "ff34a08df6c9e1ed2fa95bd3ffab7c89",
"assets/assets/images/hero4.png": "3f40e6698fd2b7b9978e3a29bc9025d5",
"assets/assets/images/hero5.png": "0c1103ee0cc423aa3b3a5c7f2e62c9f3",
"assets/assets/images/hero6.png": "07a79fb76885bbb2be97931536b61128",
"assets/assets/images/hero7.png": "54801333ddffccf4b25be3ee0b0dd69f",
"assets/assets/images/hero8.png": "ec397f0aaa04d181dcb2af6e9cff83b0",
"assets/assets/images/login.png": "4e1f24aeb5e7b2f5ae046f8a1b440274",
"assets/assets/images/logo.png": "76d5c5c1898ddaf1e6cbcb5865ac9b70",
"assets/assets/images/pref.png": "4bdf4b4a0185a1e85182b23fcbeeedef",
"assets/assets/images/signup.png": "00037418ba178f10cc9bfb3b68a4093b",
"assets/assets/images/Vector%25201.png": "3e507dba6f0fb0a6b517bbb7a8906cef",
"assets/assets/images/Vector%25202.png": "bf8ff3d1a469cd24ad66945a584175be",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b2a498ff4fb37e7384b7f0142eca3a7b",
"assets/NOTICES": "a443c0fdb1a21038172498cc82b5cbd7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bd4e4ae82736c5cffc3dddc7bd89d9aa",
"/": "bd4e4ae82736c5cffc3dddc7bd89d9aa",
"main.dart.js": "f14f64c516d436ff02d8ed017a0f79cd",
"manifest.json": "10a97e5035686a0589390e2fd9ed4bd4",
"version.json": "930fa5fa3be55fc77c1f81c02d24b393"};
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
