// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
export default class DummyClass {
  name: string = 'DummyClass'

  constructor() {
    console.log('Hello from DummyClass constructor')
  }

  Message(): string {
    return `Hello from ${this.name}`
  }
}
