export default function Buttons({ $target, handleInc, handleDec }) {
  const $buttons = document.createElement('div');
  $buttons.id = 'buttons';
  $buttons.innerHTML = `
    <button id="increase">Increase</button>
    <button id="decrease">Decrease</button>
  `;
  $target.appendChild($buttons);
  const $incBtn = document.querySelector('#increase');
  const $decBtn = document.querySelector('#decrease');

  $incBtn.addEventListener('click', handleInc);
  $decBtn.addEventListener('click', handleDec);
}
