const IP = 'localhost';
const PORT = 50541;
const NAME = 'ATY';
const MOVE_UP = 'Move: up';
const MOVE_LEFT = 'Move: left';
const MOVE_DOWN = 'Move: down';
const MOVE_RIGHT = 'Move: right';
const SAY_HELLO = 'Say: hello!';

const KEY_MAP = {
  w: MOVE_UP,
  a: MOVE_LEFT,
  s: MOVE_DOWN,
  d: MOVE_RIGHT,
  h: SAY_HELLO,
};

module.exports = {
  IP,
  PORT,
  NAME,
  KEY_MAP
};
