import Carousel from './Carousel.js';

const IMG_LIST = [
  'https://via.placeholder.com/500',
  'https://via.placeholder.com/500',
  'https://via.placeholder.com/500',
  'https://via.placeholder.com/500',
  'https://via.placeholder.com/500',
];

export default function App({ $target }) {
  this.state = {
    index: 0,
  };

  this.setState = (nextState) => {
    this.state = {
      ...nextState,
    };
    carousel.setState(this.state);
  };

  const carousel = new Carousel({
    initialState: this.state,
    data: IMG_LIST,
    $target,
    handleLeft: () => {
      this.setState({
        index:
          this.state.index === 0 ? IMG_LIST.length - 1 : this.state.index - 1,
      });
      console.log(this.state);
    },
    handleRight: () => {
      this.setState({
        index:
          this.state.index === IMG_LIST.length - 1 ? 0 : this.state.index + 1,
      });
      console.log(this.state);
    },
  });
}
