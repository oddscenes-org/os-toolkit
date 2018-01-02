/* eslint no-unused-vars: 0 */
import anime from 'animejs';

// Conditionally render animation
if (document.body.contains(document.getElementById('plugin-anime'))) {
  const animeDemo = anime({
    targets: '.el',
    translateX: 250,
    duration: 4200,
    loop: false,
    scale: 2,
  });

  const restartButton = document.querySelector('.restart');

  restartButton.addEventListener('click', () => { animeDemo.restart(); });
}
