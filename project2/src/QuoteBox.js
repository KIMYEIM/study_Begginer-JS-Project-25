export default function QuoteBox({initialState, $target}) {
  const $quoteBox = document.createElement('div');
  $quoteBox.id = ('quote-box');
  $target.appendChild($quoteBox);

  this.state = {
    ...initialState
  }

  this.setState = (nextState) => {
    this.state = {
      ...nextState
    }
    this.render();
  }

  this.render = () => {
    $quoteBox.innerHTML = `
      <div>
        ${this.state.quote}
      </div>
        <div>
        ${this.state.author}
      </div>
    `;
  }
}