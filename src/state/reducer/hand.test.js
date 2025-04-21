// import reducer, {
//   removeTileFromDeck,
// } from './hand';

// jest.mock('../../utils/generate-tile', () => ({generateTile: () => 'a'}));

// test('it removes the correct tile from the hand', () => {
//   const hand = [0, 1, 2];
//   const handMinus0 = reducer(hand, removeTileFromDeck(0));
//   expect(handMinus0).toEqual([1, 2, 'a']);

//   const handMinus1 = reducer(hand, removeTileFromDeck(1));
//   expect(handMinus1).toEqual([0, 2, 'a']);

//   const handMinus2 = reducer(hand, removeTileFromDeck(2));
//   expect(handMinus2).toEqual([0, 1, 'a']);
// });
