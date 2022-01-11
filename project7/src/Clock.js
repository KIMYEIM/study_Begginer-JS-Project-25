export default function Clock({ initialState, $target }) {
  const DAY_LIST = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const $clock = document.createElement('h1');
  $target.appendChild($clock);

  this.state = {
    ...initialState,
  };

  this.render = () => {
    $clock.innerHTML = `
      ${DAY_LIST[this.state.day]} 
      ${this.state.hour < 10 ? `0${this.state.hour}` : this.state.hour} : 
      ${this.state.minute < 10 ? `0${this.state.minute}` : this.state.minute}
      ${this.state.hour < 12 ? 'AM' : 'PM'}
    `;
  };

  this.setState = (nextState) => {
    this.state = {
      ...nextState,
    };
    this.render();
  };
}
