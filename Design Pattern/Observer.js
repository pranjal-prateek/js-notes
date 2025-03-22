// Observer Pattern Notes

// - The Observer Pattern allows one-to-many dependencies between objects.
// - When one object changes state, all its dependents (observers) are notified.
// - Useful for implementing event handling, notifications, or pub-sub systems.

// Example: News Channel Subscription

// NewsPublisher (Subject)
function NewsPublisher() {
  this.subscribers = [];

  // Subscribe to notifications
  this.subscribe = function(observer) {
    this.subscribers.push(observer);
  };

  // Unsubscribe from notifications
  this.unsubscribe = function(observer) {
    this.subscribers = this.subscribers.filter(sub => sub !== observer);
  };

  // Notify all subscribers with the latest news
  this.notify = function(news) {
    this.subscribers.forEach(subscriber => subscriber.update(news));
  };
}

// NewsSubscriber (Observer)
function NewsSubscriber(name) {
  this.name = name;

  this.update = function(news) {
    console.log(`${this.name} received news: ${news}`);
  };
}

// Example Usage
const publisher = new NewsPublisher();
const alice = new NewsSubscriber('Alice');
const bob = new NewsSubscriber('Bob');

// Alice and Bob subscribe to the channel
publisher.subscribe(alice);
publisher.subscribe(bob);

// Publisher sends news
publisher.notify('Breaking News: Observer Pattern is easy to learn!');

// Bob unsubscribes
publisher.unsubscribe(bob);

// Another news update
publisher.notify('More News: Stay tuned for more updates!');

// Summary:
// - Publisher maintains a list of subscribers.
// - Subscribers implement an `update()` method to receive notifications.
// - Subscribers can subscribe and unsubscribe.
// - Publisher uses `notify()` to update all subscribers.
