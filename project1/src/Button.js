export default function Button({ $target, handleClick }) {
  const $button = document.createElement('button');
  $button.id = 'button';
  $button.innerText = 'Click Me';
  $target.appendChild($button);

  this.render = () => {
    console.log('button rendered');
  };

  $button.addEventListener('click', handleClick);

  this.render();
}
