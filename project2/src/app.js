import { request } from "./api.js";
import Button from "./Button.js";
import QuoteBox from "./QuoteBox.js";

export default function App({$target}) {
  this.state = {
    quote: '',
    author: '',
  }

  this.setState = (nextState) => {
    this.state = {
      ...nextState
    }
    quoteBox.setState(this.state);
  }

  const quoteBox = new QuoteBox({
    initialState: this.state,
    $target
  });
  
  const button = new Button({
    $target,
    handleClick: async () => {
      const {quote, author} = await request();
      this.setState({
        quote,
        author
      })
    }
  });

}