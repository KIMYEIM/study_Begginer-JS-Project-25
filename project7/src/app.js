import Clock from './Clock.js';

export default function App({ $target }) {
  const now = new Date();

  this.state = {
    day: now.getDay(),
    hour: now.getHours(),
    minute: now.getMinutes(),
  };

  this.setState = (nextState) => {
    this.state = {
      ...nextState,
    };
    clock.setState(this.state);
  };

  const clock = new Clock({
    initialState: {
      ...this.state,
    },
    $target,
  });

  setInterval(() => {
    const newTime = new Date();
    const newTimeObj = {
      day: newTime.getDay(),
      hour: newTime.getHours(),
      minute: newTime.getMinutes(),
    };
    this.setState(newTimeObj);
  }, 1000);
}
