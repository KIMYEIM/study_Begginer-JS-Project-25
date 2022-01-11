import Button from './Button.js';
import Display from './Display.js';

export default function App({ $target }) {
  this.state = {
    result: 0,
    prev: null,
    show: '0',
  };

  this.setState = (nextState) => {
    this.state = {
      ...nextState,
    };
    display.setState(this.state);
  };

  const calculate = (a, b, op) => {
    switch (op) {
      case null:
        return b;
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
    }
  };

  const display = new Display({
    initialState: this.state,
    $target,
  });

  const btns = new Button({
    $target,
    handleNumber: ($btn) => {
      const { value } = $btn.dataset;
      let newNum = 0;
      if (this.state.show === '0') {
        if (value === '.') return;
        newNum = value;
      } else {
        if (this.state.show.slice(-1) === '.' && value === '.') return;
        newNum = this.state.show + `${value}`;
      }
      this.setState({
        ...this.state,
        show: newNum,
      });
    },
    handleOp: ($btn) => {
      const { value } = $btn.dataset;

      switch (value) {
        case 'C':
          this.setState({
            result: 0,
            prev: null,
            show: '0',
          });
          break;
        case '=':
          this.setState({
            result: 0,
            prev: null,
            show: calculate(
              this.state.result,
              Number(this.state.show),
              this.state.prev,
            ),
          });
          break;
        case '+':
          this.setState({
            result: calculate(
              this.state.result,
              Number(this.state.show),
              this.state.prev,
            ),
            prev: '+',
            show: '0',
          });
          break;
        case '-':
          this.setState({
            result: calculate(
              this.state.result,
              Number(this.state.show),
              this.state.prev,
            ),
            prev: '-',
            show: '0',
          });
          break;
        case '*':
          this.setState({
            result: calculate(
              this.state.result,
              Number(this.state.show),
              this.state.prev,
            ),
            prev: '*',
            show: '0',
          });
          break;
        case '/':
          this.setState({
            result: calculate(
              this.state.result,
              Number(this.state.show),
              this.state.prev,
            ),
            prev: '/',
            show: '0',
          });
          break;
      }
    },
  });
}
