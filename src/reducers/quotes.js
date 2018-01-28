export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      const quote = {
        id: action.quote.id,
        content: action.quote.content,
        author: action.quote.author,
        votes: 0
      };
      return [...state, quote]
      break;
    case "REMOVE_QUOTE":
      const newQuote = state.filter(quote => quote.id !== action.quoteId)
      return newQuote
      break;
    case "UPVOTE_QUOTE":
      const foundQuote = state.find(quote => quote.id === action.quoteId)
      const idx = state.indexOf(foundQuote);
      foundQuote.votes += 1;
      return [ ...state.slice(0, idx), foundQuote, ...state.slice(idx + 1) ];
      break;
    case "DOWNVOTE_QUOTE":
      const foundQuote1 = state.find(quote => quote.id === action.quoteId)
      const id = state.indexOf(foundQuote1);
      if (foundQuote1.votes > 0) {
        foundQuote1.votes -= 1
      }
      return [ ...state.slice(0, id), foundQuote1, ...state.slice(id + 1) ];
      break;

    default:
      return state;
  }
}
