import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('indexes by property', () => {
  assert.deepEqual(
    [
      ...api.indexBy(
        [
          { id: 'a', n: 1 },
          { id: 'b', n: 2 },
        ],
        (x) => x.id,
      ),
    ],
    [
      ['a', { id: 'a', n: 1 }],
      ['b', { id: 'b', n: 2 }],
    ],
  );
});
test('keeps last duplicate key', () => {
  assert.equal(api.indexBy(['a', 'A'], (x) => x.toLowerCase()).get('a'), 'A');
});
test('supports empty array', () => {
  assert.equal(api.indexBy([], (x) => x).size, 0);
});
test('passes source index', () => {
  assert.equal(api.indexBy(['x'], (_, i) => i).get(0), 'x');
});
test('accepts numeric keys', () => {
  assert.equal(api.indexBy([4], (x) => x % 2).get(0), 4);
});
test('rejects non-function keyer', () => {
  assert.throws(() => api.indexBy([1], false), TypeError);
});
