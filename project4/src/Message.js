export default function Message({ initialState, $target }) {
  const $message = document.createElement('div');
  $message.id = 'message-box';
  $message.innerHTML = `
    <h1>Pass the message</h1>
    <hr style="height:1px; width:100%;"/>
    <h2>Enter a message</h2>
    <input id="input" type="text" />
    <button id="button">Submit</button>
    <div id="message"></div>
  `;
  $target.appendChild($message);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = {
      ...nextState,
    };
    this.render();
  };

  this.render = () => {
    const msg = document.querySelector('#message');
    msg.innerHTML = `${this.state.msg}`;
  };

  const $button = document.querySelector('#button');
  $button.addEventListener('click', () => {
    const $input = document.querySelector('#input');
    this.setState({
      msg: $input.value,
    });
  });
}
