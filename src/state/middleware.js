import { getTileAt, REMOVE_TILE } from "./reducer/hand";
import { addPathPoint, gameIsOver } from "./reducer/path";
import { resetBoard } from "./slices/board";
import { setGameOver } from "./slices/settings";

const middleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    // Do anything here: pass the action onwards with next(action),
    // or restart the pipeline with storeAPI.dispatch(action)
    // Can also use storeAPI.getState() here
    if (action.type === "newgame") {
      console.log("this is a middleware", { action, state: getState() });
      dispatch(resetBoard());
      dispatch(setGameOver(false));
    }
    // if (action.type === REMOVE_TILE) {
    //   if (gameIsOver(getState())) {
    //     return { type: "noop" };
    //   }
    //   const tile = { ...getTileAt(getState(), action.index) };
    //   dispatch(addPathPoint(tile));
    // }

    return next(action);
  };

export default middleware;
