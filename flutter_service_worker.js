'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/icon-512-maskable.png": "02b49b905c4536a2a0c1c9ffe0545c50",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"icons/Icon-192.png": "4a5ef81d547b4ea2ea072712ab43b4a4",
"icons/Icon-512.png": "dcec63038986d70e499e989318eaf9dc",
"icons/apple-touch-icon.png": "4802f340b6ed602e7e9a100b5ecbb788",
"icons/favicon.ico": "74b2b45cc4895df2e4ae2f5fc12b6882",
"icons/icon-192-maskable.png": "275a03d1fce09ae22bc5693578275d88",
"main.dart.js": "dd1686f2dc4fa65ffb0738e89634a00d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "22ec2d9b55b96e84aab9b5ecbba777cb",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"version.json": "2716738b8f8a8feb9c45b200ef8117c3",
"manifest.json": "0b379474fdffd43c5b515e6c3805aa3e",
"assets/FontManifest.json": "e577bf44552ab9eeb68e0455adc9ecc6",
"assets/AssetManifest.json": "20cff0cd4fc268fc7946f85ffab41f0c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "03af53547392b77ce87e20d901ccf244",
"assets/NOTICES": "83085549555a901c325ea61a74f3cf6e",
"assets/assets/group%2520active.png": "e49cf1aa4db12b8865a76fdd6ed285f3",
"assets/assets/grey_003m.png": "00466b22a6cefa252c1f4827123f54ab",
"assets/assets/010%2520(1).png": "c531621b5838cab06e09d30765c2c52c",
"assets/assets/grey_002m.png": "ff5336ce6ec6930cfeba42e0a24ec269",
"assets/assets/rev_icon.png": "fec84111057f5ee4848f4108cd5ffd77",
"assets/assets/group_active_1.png": "406040bb8e5627f5dbadeedfd45b3dc2",
"assets/assets/imageedit_2_8382071345.png": "8a92d75d393090189b259e3ceb1a577d",
"assets/assets/grey_004m.png": "296c0271bf70477a55aca9310c7f04f9",
"assets/assets/grey_004.png": "546d9940f80f6e4187a7eef2d7caa7fa",
"assets/assets/grey_001m.png": "5110438dabecc75f076cb2e27853a38b",
"assets/assets/grey_007m.png": "b4a3bbb236aa0bac385635bc9f784eb8",
"assets/assets/iloveimg-compressed.zip": "7a2c17d8ba2dee8906ec652850fff15b",
"assets/assets/report.png": "5f779256edb6c0e2212ad3dc0d688df3",
"assets/assets/005%25203.png": "e3a0ef0fdd21a426afb18a3dcaf395ea",
"assets/assets/direct%2520(1).png": "cbd89b1414b631192ebac963708c7022",
"assets/assets/search.png": "592b239bd61bee98c02b1b138cb5e2a5",
"assets/assets/013.png": "b7cd9a9a4a6d550b2ac8a667f7eae20e",
"assets/assets/012.png": "22876bec55b2d90a1c48f8f7ca56f4e0",
"assets/assets/%25EC%25B6%2594%25EA%25B0%2580-007.png": "35747953ff4d8d2d435c7237b58e342f",
"assets/assets/Frame%252074.png": "97a84a69cd48cd77ad84d7f9a167ec60",
"assets/assets/direct%2520inactive%2520(1).png": "4d317fb2c1f74e8fa4686244f0ed2f28",
"assets/assets/person_off.png": "120f3a88bbce4cae80897be6b310c9bd",
"assets/assets/contacts.png": "aff80069e064bc2599716747ffa28878",
"assets/assets/014.png": "e99d6cbcbde6a4487ac0571603279673",
"assets/assets/icon=like,status=off.png": "391c17e480d69f4b7669ec6cfcfbbc5c",
"assets/assets/add%2520friend.png": "b5a37729885af8aa634c752440ec408d",
"assets/assets/mypage_icon.png": "325af4f41a0d9fd654e6943c867e9fed",
"assets/assets/grey_007.png": "ac2a0b8568564b4c78123e74390ec470",
"assets/assets/icon=comment.png": "0fcd131a4136aef0f65c07cb83a9d061",
"assets/assets/001m.png": "de06fa83b515be91e961c275007d01cf",
"assets/assets/001%2520(1).png": "cbd26082cae69701f2234e80d8744f8d",
"assets/assets/icon=like,status=off%2520(1).png": "8ccc487fc67317812d6d8b734e6a33b6",
"assets/assets/block%2520user.png": "5319c21fc550d8d196059d7d8c929356",
"assets/assets/grey_001.png": "8d1eb6a1bb94f88e722d4ac38adbf5c6",
"assets/assets/grey_005.png": "585e8e6dbe20260cd5ae91c90005b304",
"assets/assets/006.png": "3ba2c913d0a99c7e91974211e1d921a0",
"assets/assets/mypage_avatar.png": "9bcd59061d028c92bdf90120c29c6eb5",
"assets/assets/avatar.png": "23d15c16d84741c2db2fb5dd9eeb5ea0",
"assets/assets/grey_006.png": "212285cadcd8c8e2bdaacf08ea04c4fc",
"assets/assets/004%2520(1).png": "b412bade42818c22c303bf6331708365",
"assets/assets/010.webp": "f8051b0ebf91480219f9e3eb09ddfb46",
"assets/assets/011.png": "e839e6edcc9a9188b5e63241b62afac9",
"assets/assets/002%2520(1).png": "51e5c596b164d59c435bece8eb968240",
"assets/assets/notification.png": "81dec3f8383a2f9dd2c5fee535952d3d",
"assets/assets/contacts%2520(1).png": "bfac204f89b78e79f537d5c3eeb69425",
"assets/assets/product_image_rev.png": "b87be63f24b131422432a618c483539b",
"assets/assets/004m.png": "616a31763777976747893283d4be03ca",
"assets/assets/sub_bar.png": "15726e0a49a8e6d3e94ede5c96708b4a",
"assets/assets/001.png": "69e66f2dfdd034695069d1aee4d271af",
"assets/assets/007.png": "07bba7c366132cd3834b483bf3310d64",
"assets/assets/block.png": "cf901fb4f3b45977d5164c6e6f336994",
"assets/assets/grey_002.png": "2e64dbeb10eaf23edc201c8388b7b82d",
"assets/assets/008.png": "4540730e9ade9517512026229bb72d81",
"assets/assets/group%2520inactive.png": "d4b9db9e78df8a7e60a9af7ea3e692a5",
"assets/assets/grey_006m.png": "ce80150d5fb88a27f552191b803a1b10",
"assets/assets/delete.png": "3d0e804031ceec2a978fb9d7d407195c",
"assets/assets/003.png": "7da4b41692539986cc98318ddb5503f1",
"assets/assets/003m.png": "6dbaf264f964bb879a339a251f45b676",
"assets/assets/icon=no_interest.png": "869c99006b9c31477fe995bd0b689b73",
"assets/assets/direct.png": "923512fbed2c21356bf32c62a0d90ac9",
"assets/assets/008%2520(1).png": "80420c8200956b3ad4bc608015e82280",
"assets/assets/product_image_order.png": "e87046f646308cee68637f1cb39c34f3",
"assets/assets/002.png": "bfde38f62bef44afea4cf235cdcc1cd4",
"assets/assets/Vector%25203.png": "06461265be3aa0a91b9b739bba787fc5",
"assets/assets/006%2520(1).png": "4646857d7b308ce8e9a9049bd1aaaf16",
"assets/assets/005m.png": "a28f6b8abed98548e2d796bf485c53e9",
"assets/assets/007%2520(1).png": "72a9384dd1dab4016b198dfa4adcaad2",
"assets/assets/group%2520inactive%2520(1).png": "e6ca3cd7a33ac138661b323c9ffea38d",
"assets/assets/015.png": "9700fcbe57267fa98fda6680ac821be4",
"assets/assets/grey_005m.png": "6add9c22702f35c33b32cba0739a68b8",
"assets/assets/payple_test.html": "e0bb8ddf0c870bfd15a0d019196768c9",
"assets/assets/005.png": "01eec7163cd53be130be452253b971bc",
"assets/assets/007m.png": "40be857d4c4a4bec00c87c9cfb9602fb",
"assets/assets/contacts%2520inactive%2520(1).png": "a69112ba9de36118a58d4f511f0d3751",
"assets/assets/009.png": "09b61243dcbc95c99645e98870fa2004",
"assets/assets/direct%2520inactive.png": "b120abc87378a34fa592b1930cb95355",
"assets/assets/006m.png": "18ba71a4001d82bb211cf393ea5f65f1",
"assets/assets/edit%2520mode.png": "73b8a37ff495ef9b4295cae4c43b0005",
"assets/assets/Frame%25204.png": "847c68d8c59f05f51998850b8a3a20e9",
"assets/assets/016.png": "00ad140ca8b024fbaefb843658e5b4b2",
"assets/assets/010.png": "988378c462159bb11bdf8ff341b2b340",
"assets/assets/010no.png": "5bbb326605a36a40ab658aae8d31e325",
"assets/assets/004.png": "2b0685b8fcec0279cbf3d75b969cf496",
"assets/assets/imageedit_2_3487749186.png": "59b57b934b88807c92a54c7fa0ba3ced",
"assets/assets/block%2520(1).png": "e4029fa86bf36b3ceb57f738f869688e",
"assets/assets/005%2520(1).png": "d751a994d2387bf169f9731dd0dedccb",
"assets/assets/003%2520(1).png": "f5035e6634807b745fda4e6c89e3cbbc",
"assets/assets/image_icon.png": "321b4757ef5f4f795196b68a402aa821",
"assets/assets/002m.png": "be3dbec2c1476038ee0405ec97d57e8b",
"assets/assets/icon=link.png": "db68e81f6c306d95647ecefb311e8152",
"assets/assets/grey_003.png": "0652a3d368fd05b869984d6cb6ff2aa0",
"assets/assets/contacts%2520inactive.png": "e259a0c215fd0ca2e612f0b392c0c72a",
"assets/AssetManifest.bin.json": "7735a4de5823eb2dd8059d0561ddf3b5",
"assets/fonts/MaterialIcons-Regular.otf": "225b938e46d6885079741296f4211dcd",
"assets/fonts/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/fonts/ABeeZee-Regular.ttf": "cb714a0b844e87337aef21078fddcecc",
"index.html": "1aa391cd8024c88997f4ca3224cb77b8",
"/": "1aa391cd8024c88997f4ca3224cb77b8",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
