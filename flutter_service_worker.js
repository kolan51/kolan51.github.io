'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "58f172021518310e2cef7619ccd3f499",
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
".git/index": "d804d5e7dcb5b633b695e238aa8f77e9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "894fe3ca75ecdf3b716c723766b281c3",
".git/logs/refs/heads/main": "d4a470ce3f23026ec902bd5e55a0e664",
".git/logs/refs/remotes/origin/main": "6b6550311287ada9a1d93c69cd8ca844",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/6895907fe109a736349d436a4824423be77762": "c1d00fcf234fc83878723e9b32af6c81",
".git/objects/09/396665df9d21f42da35c1d930a8c27527832db": "8b58f1f0e43c9d738af987ff18aff897",
".git/objects/0a/143a38a6289989fa3c19933c0db2cbeea40273": "0d84a73afebcf967353ce69f8e6c5737",
".git/objects/0d/0b55c5f111ca09f4c1fcff7f5d5567b86eb50f": "a43b025f3899ce76ba665c72a9cdbe7a",
".git/objects/15/55daf05808256f0152eeda54cf7921580f475c": "28e2ff5f40f0eb183bcffda7449396e2",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/d02091006c66c7250e112631167faece710b4f": "11a362617a129108b55b7304bb640fff",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/3d2d5fcb51107fbb477dd323c779aa1c9bade8": "0e0a427656450ab9164aa0b3d246e2a9",
".git/objects/30/1b30c470df7fb8a5776db150454c212f1a3e61": "79086ede8acaa2822c69c962c8765a4a",
".git/objects/38/48fe43d032b1863f6bdefc711f02a1175b68ef": "b306676cbeecb67556e649c005652f1f",
".git/objects/3f/5bcd35886eedff4cca753dea2be33f00f971ba": "87f4939d78070e4117f41411e9dba55b",
".git/objects/41/2dd45dbb8729cdade167191830661d4d0b40b6": "e883bd31409622bdfaacfa229c5b0672",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/f7fcc8cdf0dfa6db25bbedd631563d8f42bd0a": "4730e4c731ae349de855dc89183a4b2c",
".git/objects/4e/e9419f9d5530fc5959ce33bd9446f1bfeb3daa": "51e25e839f9948c006a370453b9c0c8f",
".git/objects/50/9990718c4de91dc08197ffeb8af79971fa61d7": "3dbe84b895410371ba35f5c3f840d3e1",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/53/d04498655e3b5f5b5d545f77f627484bb804d1": "9555161f120a9558228aa3e73e911f15",
".git/objects/54/a5a37c869701eedbc22b77ec34f31a1d291b5f": "e03e85df69e9715aee381360aa7a5b28",
".git/objects/57/6ba1c1406a642aac55f9909e59af8b72d49a35": "054d4d55eac2fdcf07a85004c6cdf522",
".git/objects/59/8daf6711b882b41ee3993ae78a526ec848197f": "92b6a2628a2cd3b0351ddd6f4a637252",
".git/objects/59/a39dd3ed36f63dc3f95d93002b23407412c7d6": "e7745b196861f2e7f650161adce72349",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/62/0c85e3af02de7010306e0c7b8f516ef8ddcee8": "8b1b7d1c5a437930e4579c748451cfb1",
".git/objects/66/84d7c78556a91d1b47127f87d527a66fd4da2f": "e02f2946c9f07824e692f07dbff6e839",
".git/objects/66/8c89e274f58c6a03d9d50227275d5f5c854433": "4817bfebb83e9382dd59c6e08ae63afe",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/6c/b92d11257a0590f2856ae7049eae74eede9219": "eb08d260423aec1ba21ce75f947501ff",
".git/objects/6e/969a5ba6053397469dcab942f7f250110e9f74": "db32695c1ab7744086da706bdfc867cf",
".git/objects/6f/7d26185dcec91dbbb41947addc65382af19212": "dbcfd8ed8426cbefa1c1d192a3ae537c",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/75/f3ff3ef331b74a7bd3a8c9a577e8de7a575549": "90bd7dcb8b26072e736fed52c9b143de",
".git/objects/79/7c4a570ab4ec5b077a670bdcd53cfd5d680da6": "4aabf5af34d66e463f7a962f2d293037",
".git/objects/7c/d4b7e7f2c293e970f854a865bcc942ff9ca544": "ea378d53460c667fcafd0957730ed843",
".git/objects/7e/7bbfb158a3f512f1d6abe97c52b5a78955c96c": "19eea4289c0c8956417e78f881119e6e",
".git/objects/80/f62a6b2bb6391e30091fb666ea1090e97f7c4d": "7790463ef9b289468389de49d22a8ec2",
".git/objects/80/f9ebcd421f988c019bf0367936762d9e15cb14": "89378eb8253ee0e5c7181d67c4916afe",
".git/objects/81/6ae3b8732055569171b7990451b03be77261b7": "7e99682f08fa2c286192ae9da61b30b6",
".git/objects/85/a9faaa8b1044841974a4535cb223c1efef4bbc": "c5ad99d743cd4d888402bae178c81bdb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8f/3cba9ae677d4771d80fce7a45fbfe0aa0f2d39": "74c0e4f7023a6a94098f616ea96733b1",
".git/objects/90/e93def5044c5320cbef54b39f645ed5f58d80d": "459665bf4e6bccdbff116f314cef53bf",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/9377a0da92ea61c488ed416170de6bb117c5cb": "3f10499cd464e1da7b4423975a8ead90",
".git/objects/9c/0ebe5b59632de2475de65aef24ef01ff1b893e": "6860e3e3671e19bfa4060466658cdeb8",
".git/objects/a9/307e90e9515b4ac4ce9e9a3b5e482482eed0ca": "ce63059ef3dcc6e3f40ce6fef1904b1e",
".git/objects/ad/ad42112decb402d29b1d988886a68491f21467": "dcc616142ebc2dbe7c977356bff050ab",
".git/objects/ad/e05beafec4be6edaa51517bab2fd838ab39049": "72016d06eb08a728685db109854e6596",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/ad3fba5a1b010ffed77057287bdf78785c8f6c": "0ba32f0f8e1f8c5f40e819e578d7148e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/29a2b9b386417bd84e76145c2bbec8ede00b07": "a8d8a05591a24ddd74dd8f7d9d5f7597",
".git/objects/b8/8cb983bf35e3032c504252131b66df3f02aed2": "f5d9a5cc679ced057ef8b24b1519531a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/e0c1987a7a36ddc79724fdc205be949b6e4803": "7c5f0348c91ab53b14c6c6ae0460c493",
".git/objects/da/7b0d4de95798be04c6d6b7a51b0b37098f1688": "941f744bda937c1651cbce5e8c1969ca",
".git/objects/dc/162ceb45d3ae593e29c5ce4a483c5d4c990ab7": "74543edd357d1475852772ffd9c53063",
".git/objects/df/0395e940bb13becb3e806da1edaadf25307238": "7e498a92023438283f1c9cae97a193fc",
".git/objects/e4/142bfd726d0e70cd7a604fe0994f75e72baa5f": "03fb6cc2ab5b2779d10fdec1c74a723b",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/29dc1d9263c5ef11c5a7ae9a6cb765405af0f5": "56ed85038837ab89fa63bd539033feda",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/2172d1b5df2c8fdce633a1c4fee84ebf29930f": "7754f7e741f04e75bd1f38d1ddbc55f2",
".git/objects/ff/fbe9c8912b7a3b5a9db953bb42cf1dd18c2a04": "e9fb4886bb97246ec1f00ebfa71081cf",
".git/refs/heads/main": "1bf6a81581c01776be58d1f7a2c39509",
".git/refs/remotes/origin/main": "1bf6a81581c01776be58d1f7a2c39509",
"assets/AssetManifest.bin": "3ad1ce6fdf12fbe741aff259a9f5a097",
"assets/AssetManifest.bin.json": "0e301517060947b691e13540a8cb50a5",
"assets/AssetManifest.json": "0f6ec3dead658e7d1e7f165153e4d653",
"assets/assets/BLEServer.exe": "d4ef6a9a944a972629a44256c15ee95b",
"assets/assets/files/Manual.pdf": "1b75e593aa61bcc9deeb9704d90e6bbc",
"assets/assets/fonts/Anton-Regular.ttf": "13770dde4178c487efc63d33866fe613",
"assets/assets/fonts/Lato-Bold.ttf": "2d15decc87393ec398f00dc3d7a2163d",
"assets/assets/fonts/Lato-Regular.ttf": "c5eb54404c9dbda925f7142d6343c913",
"assets/assets/fonts/Montserrat.ttf": "e6cb49ef6502d09136c7302d56f4197b",
"assets/assets/fonts/OpenSans.ttf": "95393d9faf957406807a05d8fba3f4fc",
"assets/assets/images/ble.gif": "f2238f846876a4847719f002fa56f593",
"assets/assets/images/fifthScreen.png": "0a932c4aafcb048d513da50e3db50b4b",
"assets/assets/images/firstScreen.png": "202c08865bec945ad6cc81493fcdb208",
"assets/assets/images/fourthScreen.png": "04e6ed389f36a67a7877c33ef326bef6",
"assets/assets/images/logo.png": "3a330fda005fc0dada7a47d1d42793c0",
"assets/assets/images/logoSmarteh.png": "f27599a90bf8bc69216bd8429dbef749",
"assets/assets/images/logo_gif.gif": "55623d5e90458dc1083c4ab166d3e31e",
"assets/assets/images/mesh.png": "4c337497ff01a332a105ca2609b6a15c",
"assets/assets/images/secondScreen.png": "6b40c78aa0b646af0dec1147835dd3bf",
"assets/assets/images/seventhScreen.png": "2dd9035932d4a1f2f6ea57b5d42221ac",
"assets/assets/images/sixthScreen.png": "3a4446c3c79b3ecd1019cf2ca5d4c882",
"assets/assets/images/thirdScreen.png": "d9b56ec3f6bef77319a207b3c9ab93ba",
"assets/FontManifest.json": "f5052babcab4ce0f4040b7e1dd0b1668",
"assets/fonts/MaterialIcons-Regular.otf": "148c2f11f7b670947f1cb704c2d42abf",
"assets/NOTICES": "4e40f468a0fd0ed61d6290bc1ef792ba",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/win_ble/assets/BLEServer.exe": "e9bfdd0ec17cfca648a4656514ad8fb3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "83ec889f82867eceb4495f990e6fec54",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9350db004e7d37646cbe5cca5549bbbd",
"/": "9350db004e7d37646cbe5cca5549bbbd",
"main.dart.js": "0fbdbfd76eb709f7524910e13e7e93d2",
"manifest.json": "137a57a02d470882a9847481ee492568",
"sqflite_sw.js": "7794eaa54dd4ab831a484e5af974ab5c",
"sqlite3.wasm": "8ebebe5e0e9a0168e93b57a723c5b09c",
"version.json": "3652bb5f0a1340c65c9cea37ea379eb9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
