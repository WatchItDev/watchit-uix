import "@testing-library/jest-dom/extend-expect";

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length)
  }
})

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn()
}

global.navigator.geolocation = mockGeolocation;

// this gets around the 'auth0-spa-js must run on a secure origin' error
global.crypto.subtle = {}

global.console = {
  log: console.log,
  error: jest.fn(),
  warn: console.warn,
  info: console.info,
  debug: console.debug,
};

