export default function Button({$target, handleClick}) {
  const $button = document.createElement('button');
  $button.id = 'button';
  $button.innerHTML = 'Generate Quote';
  $target.appendChild($button);

  this.render = () => {
    console.log('button rendered');
  }

  $button.addEventListener('click', handleClick);

  this.render();
}