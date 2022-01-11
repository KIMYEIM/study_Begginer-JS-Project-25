import Button from './Button.js';
import Text from './Text.js';

export default function App({ $target }) {
  this.state = {
    color1: '#ffffff',
    color2: '#000000',
  };

  $target.style.background = `linear-gradient(to right, ${this.state.color1}, ${this.state.color2})`;

  this.setState = (newState) => {
    this.state = {
      ...newState,
    };

    text.setState({
      ...this.state,
    });

    $target.style.background = `linear-gradient(to right, ${this.state.color1}, ${this.state.color2})`;
  };

  const randColorGen = () => {
    const range = '0123456789abcdef';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
      let idx = Math.floor(Math.random() * 16);
      hex += range[idx];
    }
    return hex;
  };

  const text = new Text({
    initialState: this.state,
    $target,
  });

  const button = new Button({
    $target,
    handleClick: () => {
      const newState = {
        color1: randColorGen(),
        color2: randColorGen(),
      };
      this.setState(newState);
    },
  });
}
