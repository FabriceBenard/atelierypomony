const player = document.querySelector('lottie-player');
player.load('data.json');

var animation = {
  container: document.getElementById('player'), // Required
  path: 'data.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
};

var anim = bodymovin.loadAnimation(animation);

var animation = bodymovin.loadAnimation({
  container: document.getElementById('player'), // Required
  path: '28087-email-services.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
});
