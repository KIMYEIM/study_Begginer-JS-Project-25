export default function Text({ initialState, $target }) {
  const $text = document.createElement('div');
  $text.id = 'text';
  this.state = {
    ...initialState,
  };
  $target.appendChild($text);

  this.setState = (nextState) => {
    this.state = {
      ...nextState,
    };
    this.render();
  };

  this.render = () => {
    $text.innerHTML = `
      <h1>
        background: linear-gradient(to right, ${this.state.color1}, ${this.state.color2})
      </h1>
    `;
  };

  this.render();
}
