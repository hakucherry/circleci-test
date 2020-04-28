import { add } from '../src/adder';

const ws = new WebSocket('ws://localhost:8787');

// The assertion for a promise must be returned.
it('always!!', () => {
  const promise = new Promise((resolve: any, reject: any) => {
    ws.onmessage = (e: MessageEvent) => {
      resolve(e.data);
    }
  }).then(response => {
    expect(response).toEqual('hello world!');
  })
  ws.onopen = () => {
    ws.send('hello world!');
  }
  return promise;
});

// The assertion for a promise must be returned.
it('add!', () => {
  expect(add(2, 5)).toBe(3);
});