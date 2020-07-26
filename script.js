
var animation = {
  container: document.getElementById('data'), // Required
  path: 'data.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
};

var anim = bodymovin.loadAnimation(animation);

// lottie.loadAnimation({
//   container: document.getElementById('animation'), // the dom element that will contain the animation
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'animation.json' // the path to the animation json
// });

// var lottie2 = document.getElementById('lottie2');
// var animItem = bodymovin.loadAnimation({
// wrapper: 'lottie2',
// animType: 'svg',
// loop: true,
// path: '28087-email-services.json'
// });


// var anim;
// var elem = document.getElementById('lottie2');
// var animData = {
//     container: elem,
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     rendererSettings: {
//         progressiveLoad:false,
//         preserveAspectRatio: 'xMidYMid meet',
//         imagePreserveAspectRatio: 'xMidYMid meet',
//         title: 'TEST TITLE',
//         description: 'TEST DESCRIPTION',
//         filterSize: {
//             width: '300%',
//             height: '300%',
//             x: '-100%',
//             y: '-100%',
//         }
//     },
//     path: '28087-email-services.json',
// };
// // lottie.setQuality('low');
// // anim.setSpeed(0.5)
// anim = lottie.loadAnimation(animData);
// anim.setSubframe(false);
// anim.onError = function(errorType, nativeError, errorProps) {
//     console.log(errorType)
// }
//
// anim.addEventListener('error', function(error) {
//     console.log(error)
// })

var animData = {
    wrapper: document.getElementById('lottie2'),
    animType: 'html',
    loop: true,
    prerender: true,
    autoplay: true,
    path: '28087-email-services.json'

};
var anim = bodymovin.loadAnimation(animData);
