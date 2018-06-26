import immer from "immer";

export const produce = (reaction) => immer((draft, action) => {
  if ((action.payload && action.payload.error) || action.error) {
    console.log(action.payload.error)
  } else {
    reaction(draft, action)
  }
});