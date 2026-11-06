import * as api from '@lp-labs/array-index-map';
import { indexBy } from '@lp-labs/array-index-map';
console.log(
  indexBy(
    [
      { id: 'a', v: 1 },
      { id: 'b', v: 2 },
    ],
    (item) => item.id,
  ),
);
// @ts-expect-error invalid argument must be rejected by declarations
api.indexBy('items', (x) => x);
