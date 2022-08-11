'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "17ba08db6e086bf041c6b63b30b24ff9",
".git/config": "d92a88a14fdcea8418bd49b22949f06c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dcac3362fd1d7121ec42e196f5d80369",
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
".git/index": "b8b591e102c3d032e8436de5f93119b1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5a884bdc9c3d1de78770b4b74fdf055b",
".git/logs/refs/heads/main": "5a884bdc9c3d1de78770b4b74fdf055b",
".git/logs/refs/remotes/origin/HEAD": "fafc284f986021ff7024c8a4c0005cfd",
".git/logs/refs/remotes/origin/main": "cdb663110789cf8b06b90faa4cc34217",
".git/objects/00/304c116cbe7cb7ba42b868ed50d529acf9c8f8": "a1e6901a11226b0a4306f03e48937957",
".git/objects/01/b4957b9ef88c6f1d387b9be14c0bdcbc963243": "9e4ae930e783569657893adfc3599521",
".git/objects/06/551177c4f6e60b64990bb528e726ed7f9b2c5a": "84639a5ee4751ca5b88c0f832021f1ba",
".git/objects/06/9d26950957dac7df41a6d6ae7687286b873717": "357df28b04d5a1de56d0716e12ceb969",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/357b0f1d1ed8d806f60de7cec5cb9ff8b0a2c2": "3350ffded9e5260849a2ddde362a0540",
".git/objects/0d/8865505c84ce2f1b1766d2532d8bd8ecf85027": "70874045ab6255b40798179af07d3dbc",
".git/objects/0e/4c959c703fd5c791a417781910e2f737aeb678": "cdc0cedc400844c3b8739a1fb20da5de",
".git/objects/0f/827e08b9e9e923a206144f363a4fe31c2c64fa": "ccc2d9472b9b6b96fe80fb226723a20a",
".git/objects/12/70f63b0a919e5a9046c0c6ead8345bc54e861d": "38068229f434fcdec21b6701ba93d524",
".git/objects/13/2cc28725aac742c53ee667f4a1cdd351a6dd72": "3efb5c0ee8a11a2a0c44a6e734020353",
".git/objects/14/d4df0886b7816c2d34ad62513b7491dddb737a": "8a3a632ab8ed5680ffa04abcb46ae810",
".git/objects/18/baa43b375d1f07cbb151af81e6bef5683f7739": "542e2caffc740758c46e31c270e78933",
".git/objects/22/860dd1639100e1e54ed3f7be10f9310ae8c7b9": "902ca19cf2ebd42f7bffc859eabeb6f8",
".git/objects/23/1412d18dc8ce35b1ad297e802133204d8f27fc": "8a5be1651828614c8fefd07cfe960a77",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/63788d75fc40a0bd925e9893b7049da06f10be": "47f409b254c8490b21fde220917a5abf",
".git/objects/27/cff0308d4caceb42b5b7beaa2f1db2cf2fecff": "069374a6757f1c1bc0bb28b8388a1b35",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/6ebb09a267cb0dda72a04e4796781c449886c2": "453899ec794c3cc5290882652288e3b3",
".git/objects/30/73850f879b400078a3874384ad121508abe8b7": "186bd5bae21b6486a5a367caa147c854",
".git/objects/31/0030fc55e9e0ccd301a7d1ed9efdbf00549344": "67558cf11b0dd0c034892a8253cd9ab7",
".git/objects/31/1063a7018154247f96d3554fdb6acdec61bcc1": "43fc176886b7f987b0812e3884103451",
".git/objects/31/4c470753a01cb69207aef60221552618614e6d": "0dfef78c2ac717d0a5a4ebff93e2e391",
".git/objects/31/6f8d8fad2b4c2db281cf6ad9d4c7fbea0e0d84": "d24e2e3206c12d71d204df1f51340ce4",
".git/objects/38/fc7f300c928d4d48971b1de896bb541c297274": "8308a02c7a8511f5aa1d3a95427ef00e",
".git/objects/3a/e1f7eae189a1519f5c911798fcd045464b9671": "8b0fefeec07cd81268975134f2cc18f1",
".git/objects/3e/f4452c5dcb51a2ebc7cf393abf0151c6b10843": "3c437841ed10403667dfb2259328df53",
".git/objects/3f/2edb90f03cfcef45dbf3d764f6ace7070d1576": "dd2fd700e4632592e20682d448c03276",
".git/objects/3f/dd5e175a874b1a226c71bfb33c5e1a179fe895": "930631a90818366fcb48a3ae4f6f68ab",
".git/objects/43/2bf20d4112d0c40ce0b01d751d5f23866449e8": "f0a778271529be3c5966796d61c4e902",
".git/objects/45/e30acb03ec98c2d64045127bda978593245078": "a5ac6940ad1c627a69135457ba83c005",
".git/objects/46/d8be55c0514e33ddd0766379f4a100cfbc68c8": "a232f818848e2eaa1dc15fb8cbbeffee",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/49/31e1e6dfc489d8d4bc060c5de2b3db1d21f1c4": "72ddfd215c08d9e1198ab24ebdfea45e",
".git/objects/4a/defe220ff5d81ab88e533527734a4242c81c28": "04e5399d456352748ef4a3e130122a24",
".git/objects/4d/728e375308660f22004e5d149b37720d35e3ed": "1e438a0057159c1aa80054781e7b04c5",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/fa3a502184405cfd7fa2ea8f83ebe242ec6043": "9575fdb68b6ef4ddd54ec1a502445aef",
".git/objects/54/f79bebd76431adf5822edc29bf8f614d05820e": "4947df85491183c2396ff4febe19466d",
".git/objects/55/c7afc47e786ecff9251293aa464e5d269c2eea": "55eb3bce2cf91fa1128fa3678d59a354",
".git/objects/57/4541df51e8e674c24815d35d1c162d131ee420": "fbc94d41b350c22b4ed874022f5bed60",
".git/objects/57/a90c736580a8e9cd87614bbeb23c23189ab12e": "d17188b9b36be62eebbc6f8412b3490c",
".git/objects/58/47c15457574b75651a9407494f6988f7473416": "44491c8ee27c7342825abfd4270facbd",
".git/objects/58/be2c278f74264aaeada2ff148137a9e3a377a8": "5309c7ff228576946ded3ef3de50cf4a",
".git/objects/5f/12926d3e2693c31d03e6f797c0d280e5a38073": "02199e1c83ae7fbb3fa0ff09dfcaf5ab",
".git/objects/61/2de2759ce2be2d96be705282f462afe29bc41b": "175899f4820a0d5cedb45a47a7771198",
".git/objects/65/96f6a1979f101e87178d97886ef3e6b56fdb24": "2dd55d8885a85ef7c758d0f2c3eafd32",
".git/objects/69/60aa15e1c7dd3f0bfa3377f8ac3c3fbde02149": "af8e13ce1013d665478a6e16ec190e5c",
".git/objects/6a/006dc430b2cf8cf2b08a6713b02ec555de4ee1": "79f3ca228b12e617de837c68a9b43ce3",
".git/objects/6a/3de3b4a93113af86df46a05234d97268399ba5": "9793c95c809b4c48902e664c94a56d4d",
".git/objects/6a/8bcac59f01538574ebcff68a047adb868feb52": "9da25c6502e5e6cf0c08c0b3ea79b657",
".git/objects/6c/313551594e8a36dbdf55fc66b0b5060ed7011d": "6ea1af7209fe0179167edc281be1a155",
".git/objects/6c/72a7bf0e4f8640cd7132d4d79e97ae70c83e8c": "716fb2235e13253f32e9fc8c4dd8af16",
".git/objects/73/0c96efc498e3589252b7892a4b46a95e30be42": "851267dd708064d89df495ed4c6b9d40",
".git/objects/74/3df44ebcba2415b946e00124c553ef32b1c0bb": "b67e23f2df4c5f594dfc85f6a3e9725d",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/df3ca964e9cdf4dbc014dfab47c035c584c8f0": "540f684e62456e3e730f262a1ce8c803",
".git/objects/7a/1dd3d3a39bdb2da970e8488df5dbc03229c34a": "862ad78f684c0479c6070785940f0178",
".git/objects/7c/bf13ebf7aedafd0bac7061bc9238e89a6a016a": "049f60e11b6d5545fc4649180d34eec2",
".git/objects/7f/8adf2f7031aa920c20e53be28fe4703fde3ed1": "82e2aa25aa7d185bdf16a7dd94fc010a",
".git/objects/84/b2b79d242221027a99e29c704050b702e983d6": "0982deb99151ded80fd72feca43f3d2f",
".git/objects/89/3b33c53f54ee2e42d66782f6fda25d54ed3e57": "3c24d6e8c2fb1472b6c3e82ee417502b",
".git/objects/89/6584745094e4bc83876326193be02adb59086c": "a2370494c23e19563099a8409d447e90",
".git/objects/8a/deaa70f3e01b7d27bc844ec797784da67659f8": "cd7906e081be522da057727127ad360f",
".git/objects/91/17e68ffaeee5dc05f14af35698fa1f05100631": "e51f648d32ddf9f0f62de1d486293d6a",
".git/objects/91/66ea4a677adffcff2f21a247c9944c8573fd55": "6bff9d6d1af8f341f159624bd72d7e6b",
".git/objects/93/23dc18a4c7af0ec23ffeed503347b22d70620f": "204ce23d9a6d0d09eb7c598bfc809c84",
".git/objects/94/e938034f97b0c355717065b1c54b623c2555d1": "764e2fe3e780aab937fb8aadab2827ce",
".git/objects/96/3bb23797be85bc66de63df7476ef58b61565ee": "07f9f36e6c348a99e01c5027106a625e",
".git/objects/99/b1e18d3099a98ba6307197bc5055f8c6748786": "5d4a525a742dd64660d732f133680e9a",
".git/objects/9a/3df4faae36a0e77e2f77d4a646bd1e9a4d3a98": "0ce31f5460919dc1da8a8f460322e933",
".git/objects/9f/231457916a9e22338dfbbbf61b2bf2b50fb96f": "86dfc5d6980d12f8bebc8efa7f618d1e",
".git/objects/a2/0638cfebd8cb3eeec967bc23eb0dd5b880fa78": "451ae3a5668a4038d0fd04c3308aace2",
".git/objects/a2/6de2d62cd33dc9ba27a90f25d93575008b22c4": "8ee3baf9cceb71eab33898920267356d",
".git/objects/a4/ce64943f9e15156b4e6506d47a3d47026ec570": "e5a3e67fbcc5ac2d7c33e3caa9719adf",
".git/objects/a5/df1dc31c3c09c476ef8137bfe6fa7af139ff86": "05b818a8badf100adb6de265c3b8b650",
".git/objects/ad/5f96981d39627152499330be2997dd419d4758": "fcebbe377c61553f11deab6f90c264a8",
".git/objects/ae/a00ccfa844c5873ee26ee3c26d770006337b8b": "2855923757796c02cb78002056aa1782",
".git/objects/af/d9b5023fc2429c5e69cb6558e71cbaf61adc34": "94afd1d80caab45be88cc44fb9525c5d",
".git/objects/b0/3243daab74a045ea08bcb15d160b5005192638": "82b3ecc9ace03bc3adfc9d4add5c7242",
".git/objects/b2/ebb9a4f92dea714d528d7b539e98a19c39417b": "9666551068569a795a700291ceef24c6",
".git/objects/b6/3b619b2e4727d8b41d400419e974cfb23bad68": "a0377ad4256b72f9e95c5b273901c8df",
".git/objects/b7/d24480fb1694ff78f20c8ebfd4df5baa9cd30e": "c6a3280516eae1d2ac62390dc85e0170",
".git/objects/b7/e5efb3a41abf25ff6084eae0569ae92e4a8036": "809181bae0cb451423db1fcf2575b6a3",
".git/objects/bb/a5dc7fa6f3c98525fdb78648d7a939a09085cc": "ab825502ffb661c6b88475d37ed8244a",
".git/objects/be/3f686808b28ba2ef3f75a39b87a1f09fc334b0": "e59031dd68a4c4879a7b1b31e175da1a",
".git/objects/be/937c14a30c4639c21496c0de52497517d9eade": "fe6f97481a2210c6ff93e53c89774e03",
".git/objects/c1/df72aa1757ba978921de6dd4ef3e53dee49b0b": "5199f1e132153743452b95a9208b28a1",
".git/objects/c4/1705a05b32637a34cee8d6f2d1c7a5395092cb": "1add58c089f7f4940e288d7305152b25",
".git/objects/c6/f2f5726b1994fa4741c1109bc1b07cea963e20": "61308b976a9b328c083516c16760fd8a",
".git/objects/c8/bf32fb893048cd7f8b33aba98da770103caeea": "7fb3c3d1cc44c87bfa079caaddc4dcb4",
".git/objects/c9/09b3e5bab79ae671385d7fd3b8d65369ab96f9": "df7015d13dd2cbcb9f18fd0428e6abc4",
".git/objects/cc/7262c9705709453969ab459851616f049e9707": "082e51733af574ee2953953496ecb514",
".git/objects/cc/f3a4e8e47919c43931643027aa99348816d1d7": "919b71587dc8ca99f570fce3e725cc6c",
".git/objects/cd/30240224c3519864e0accb1da218339d7f1473": "fdc88f4c19857fa4eabec8c9a9fbdd9b",
".git/objects/d1/e1b0aec3d2d97d9bfa6289dc9960349b3e8d73": "ab32b29a34cb0fd397d2453d36e24de1",
".git/objects/d4/1932533ec45e62d772949d8dd48902f78efdbe": "a8fca4cb8bdae830b573244ad1618dd1",
".git/objects/d4/c2343fca08da6001be8b52649abaf69e0782cc": "18597b508dce4de03e0aae77b272c8d1",
".git/objects/d8/695f08c9ffe0c91343df0d3f26f6e01afe9ba1": "026595fc36d5e3c12cb418eec88457c7",
".git/objects/d8/ab05bed1a4a69c82bf0a82b55f54db763e7709": "9b1ee04cf469c5084500175e90dad49a",
".git/objects/dd/ba331178c9f7f1be01d39a0c9a031493c3507b": "8951b41e99341454aade4deba4f1a1ce",
".git/objects/e0/115137411c55e3655d514ad72e4bb2e44e4d9b": "7a278f7c3f61434c1a4e8de99b16c58a",
".git/objects/e4/eb4be60d1c664db69ee45870f1a04489682882": "80f642e393fee00d35b8077b8b453d91",
".git/objects/e5/8763d29f28166547b335e3d94793e78e9d8887": "00bb065b86a148f274a83842b88f596b",
".git/objects/e7/f31a01089a7f7d5f63a8ab586843ae53dbd9d7": "dceae50e0c6ff067ed46626bf1b4294e",
".git/objects/e8/14120900d30de14eb5db6e433b6ee815f4db50": "fd166619b50b69870245487542c481be",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/f606b43b4507818f6f61a78ce32114346ba133": "f64bd9b19ddd63c804159fd057050451",
".git/objects/ec/58081b0617e7350dc3a861e5a9832d5144ae87": "6b29ad36ccf50d697553b1abd8f8d967",
".git/objects/ed/7943b29723ccd6245816d9465db58e96a136a4": "b01394c557bfb0dd6bb56095a0ed02eb",
".git/objects/f1/df869e0a3e71140fb1e0074020df688bcda0da": "808efe636fd07dba246bb40f1ff4bbcc",
".git/objects/f2/c41b4e01907f9789191b9ffad2a02d610a83f5": "ccefee2dbe22d9f75da5211bba8431a5",
".git/objects/f2/eec16f268dda1ce16259dd8c34fff7baa1bf98": "2d15a3716c76917c055c63b6b6286793",
".git/objects/f4/df3b9af0b55c4365fb042b9b2c368a9712f924": "84cb013a5860c92103907f6415992de7",
".git/objects/f5/eb7c6b7ed720d1d3a2da37b91870f4456ac85a": "9492c6396a53d40a54eac78348c15263",
".git/objects/ff/ba4c5e19045f2fa25222b573be827204172c04": "de2c97fca9f3127d5c73734f397d3438",
".git/objects/pack/pack-6680f66a3ef2b986a8e7931d0199c804904654e5.idx": "3bb9499d856745e3589fa9377b10dde1",
".git/objects/pack/pack-6680f66a3ef2b986a8e7931d0199c804904654e5.pack": "0ab287b80bc628d529a0b0ef666942fa",
".git/ORIG_HEAD": "95426d3a2d3a417a1dc6a3c81dc139a8",
".git/packed-refs": "de5fed678a90c18fd6342803e101bc5b",
".git/refs/heads/main": "6d234987488199d1d5d4b3db96360c78",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6d234987488199d1d5d4b3db96360c78",
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
"assets/error.jpg": "d5a1a26944087945825596de1dc36053",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/error.jpg": "d5a1a26944087945825596de1dc36053",
"assets/images/logo_pizzeria.png": "0697ff78a2039331f3494ddcc0fcebe9",
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
"assets/logo_pizzeria.png": "0697ff78a2039331f3494ddcc0fcebe9",
"assets/NOTICES": "b969638a484b8aaebdecde334c3358fc",
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
"index.html": "8208cf691a3fd63eac0a8bdc9dc531a4",
"/": "8208cf691a3fd63eac0a8bdc9dc531a4",
"main.dart.js": "42b4520fd2b0de87b20a7845a2657228",
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
