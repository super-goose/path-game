import { generateTile } from "../../utils/generate-tile";
import {
  rotateTile,
  COUNTERCLOCKWISE,
  CLOCKWISE,
} from "../../utils/transform-tile";

export const REMOVE_TILE = "hand/REMOVE_TILE";
export const ROTATE_CCW = "hand/ROTATE_CCW";
export const ROTATE_CW = "hand/ROTATE_CW";

const INITIAL_HAND = [generateTile(), generateTile(), generateTile()];

const reducer = (/* state: */ hand = INITIAL_HAND, action) => {
  switch (action.type) {
    case REMOVE_TILE:
      /* eslint-disable */
      let _hand = [...hand];
      _hand.splice(action.index, 1);
      return [..._hand, generateTile()];
    /* eslint-enable */
    case ROTATE_CCW:
      return hand.map((tile, i) => {
        if (i === action.index) {
          return rotateTile(tile, COUNTERCLOCKWISE);
        }
        return tile;
      });
    case ROTATE_CW:
      return hand.map((tile, i) => {
        if (i === action.index) {
          return rotateTile(tile, CLOCKWISE);
        }
        return tile;
      });
    default:
      return hand;
  }
};

export default reducer;

// actions
export const removeTileFromDeck = (index) => ({ type: REMOVE_TILE, index });
export const rotateCCW = (index) => ({ type: ROTATE_CCW, index });
export const rotateCW = (index) => ({ type: ROTATE_CW, index });

// selectors
export const getHand = ({ hand }) => hand;
export const getTileAt = ({ hand }, index) => hand[index];
