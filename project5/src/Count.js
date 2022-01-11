export default function Count({ initialState, $target }) {
  const $countBox = document.createElement('h1');
  this.state = { ...initialState };
  $countBox.innerHTML = `${this.state.count}`;
  $target.appendChild($countBox);

  this.setState = (nextState) => {
    this.state = { ...nextState };
    this.render();
  };

  this.render = () => {
    $countBox.innerHTML = `${this.state.count}`;
  };
}
