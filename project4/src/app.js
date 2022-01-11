import Message from './Message.js';

export default function App({ $target }) {
  this.state = {
    msg: '',
  };

  const message = new Message({
    initialState: {
      ...this.state,
    },
    $target,
  });
}
