import Buttons from './Buttons.js';
import Count from './Count.js';

export default function App({ $target }) {
  this.state = {
    count: 0,
  };

  this.setState = (newState) => {
    this.state = { ...newState };
    count.setState(this.state);
  };

  const countBox = document.querySelector('#counter-box');

  const count = new Count({
    initialState: this.state,
    $target: countBox,
  });

  const btns = new Buttons({
    $target: countBox,
    handleInc: () => {
      this.setState({
        count: this.state.count + 1,
      });
    },
    handleDec: () => {
      this.setState({
        count: this.state.count - 1,
      });
    },
  });
}
