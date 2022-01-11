export default function Display({ initialState, $target }) {
  this.state = {
    ...initialState,
  };

  const $display = document.createElement('h1');
  const $display2 = document.createElement('div');
  $target.append($display, $display2);

  this.setState = (nextState) => {
    this.state = {
      ...nextState,
    };
    this.render();
  };

  this.render = () => {
    $display.innerText = `${this.state.show}`;
    $display2.innerHTML = `
      <h3>result: ${this.state.result}</h3>
      <h3>prev: ${this.state.prev}</h3>
    `;
  };

  this.render();
}
