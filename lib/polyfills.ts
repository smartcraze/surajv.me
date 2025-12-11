// Polyfill for localStorage in server-side rendering
if (typeof window === 'undefined') {
  // Mock localStorage for SSR
  global.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    key: () => null,
    length: 0,
  } as Storage;
}
