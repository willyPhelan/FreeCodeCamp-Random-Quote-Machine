import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

const quotesData = [
{ text: ` 'When it is dark enough, you can see the stars.'`, author: 'Ralph Waldo Emerson' },
{ text: `'We are all like the bright moon, we still have our darker side.'`, author: 'Khalil Gibran' },
{ text: ` 'It is by no means an irrational fancy that, in a future existence, we shall look upon what we think our present existence, as a dream.'`, author: 'Edgar Allan Poe' },
{ text: ` 'I knew nothing but shadows and I thought them to be real.'`, author: 'Oscar Wilde' },
{ text: ` 'I am terrified by this dark thing that sleeps in me.'`, author: 'Sylvia Plath ' },
{ text: ` 'It was the possibility of darkness that made the day seem so bright.'`, author: 'Stephen King' }];



const Quotebox = ({ quote, handleNewQuote }) => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
    React.createElement("p", { id: "text" }, quote.text), /*#__PURE__*/
    React.createElement("h2", { id: "author" }, quote.author), /*#__PURE__*/
    React.createElement("div", { class: "actions" }, /*#__PURE__*/

    React.createElement("button", { id: "new-quote",
      class: "button",
      onClick: handleNewQuote }, " New Quote     "), /*#__PURE__*/

    React.createElement("a", {
      href: "https://twitter.com/intent/tweet",
      id: "tweet-quote",
      target: "_blank" }, "Tweet "))));





};
const getRandomIndex = () =>
Math.round(Math.random() * (quotesData.length - 1 - 0) + 0);

const App = () => {

  const [quote, setQuote] = React.useState(quotesData[getRandomIndex()]);

  const handleNewQuote = () => {
    setQuote(quotesData[getRandomIndex()]);
  };

  return /*#__PURE__*/(
    React.createElement("div", { class: "main" }, /*#__PURE__*/
    React.createElement(Quotebox, { quote: quote, handleNewQuote: handleNewQuote })));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#app'));