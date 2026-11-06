export function indexBy<T, K>(
  items: readonly T[],
  keyOf: (item: T, index: number) => K,
): Map<K, T> {
  if (!Array.isArray(items) || typeof keyOf !== 'function')
    throw new TypeError('Expected array and key function');
  const result = new Map<K, T>();
  items.forEach((item, index) => result.set(keyOf(item, index), item));
  return result;
}
