type Callback = () => void;

export class Eventing {
  // All the keys in the event is a string and value of a Callback
  events: { [key: string]: Callback[] } = {};

  on(eventName: string, callback: Callback): void {
    // Check if there is the same event name or if its undefined
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  // Trigger all the callbacks in that eventName
  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }
}
