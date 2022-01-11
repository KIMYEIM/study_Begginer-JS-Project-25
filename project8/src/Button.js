export default function Button({ $target, handleNumber, handleOp }) {
  const $btns = document.createElement('div');
  $btns.id = 'btns';
  $target.appendChild($btns);

  $btns.innerHTML = `
    <div>
    <button class="number" data-value="1">1</button>
    <button class="number" data-value="2">2</button>
    <button class="number" data-value="3">3</button>
    <button class="operator" data-value="+">+</button>
    </div>
    <div>
    <button class="number" data-value="4">4</button>
    <button class="number" data-value="5">5</button>
    <button class="number" data-value="6">6</button>
    <button class="operator" data-value="-">-</button>
    </div>
    <div>
    <button class="number" data-value="7">7</button>
    <button class="number" data-value="8">8</button>
    <button class="number" data-value="9">9</button>
    <button class="operator" data-value="*">*</button>
    </div>
    <div>
    <button class="number" data-value=".">.</button>
    <button class="number" data-value="0">0</button>
    <button class="operator" data-value="C">C</button>
    <button class="operator" data-value="/">/</button>
    </div>
    <div>
    <button class="operator" data-value="=">=</button>
    </div>
  `;

  $btns.addEventListener('click', (e) => {
    const $btn = e.target.closest('button');
    const { className } = $btn;

    if (className === 'number') {
      handleNumber($btn);
    } else {
      handleOp($btn);
    }
  });
}
