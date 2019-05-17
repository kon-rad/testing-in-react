export default ({ dispatch }) => next =>action => {
  // check to see if payload has a promise
  // if it does - wait for it to resolve
  // if it doesn't - pass it on to next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // if there is a promise, wait to resolve, then dispatch new action with received data
  action.payload.then((response) => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  })
}