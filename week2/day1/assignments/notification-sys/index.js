// Concrete Observers
var Smartphone = /** @class */ (function () {
    function Smartphone() {
    }
    Smartphone.prototype.update = function (message) {
        console.log("Smartphone received notification: ".concat(message));
    };
    return Smartphone;
}());
var Tablet = /** @class */ (function () {
    function Tablet() {
    }
    Tablet.prototype.update = function (message) {
        console.log("Tablet received notification: ".concat(message));
    };
    return Tablet;
}());
// Subject
var NotificationCenter = /** @class */ (function () {
    function NotificationCenter() {
        this.observers = [];
    }
    NotificationCenter.prototype.attach = function (observer) {
        this.observers.push(observer);
        console.log("Observer added: ".concat(observer.constructor.name));
    };
    NotificationCenter.prototype.detach = function (observer) {
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
        console.log("Observer removed: ".concat(observer.constructor.name));
    };
    NotificationCenter.prototype.notify = function (message) {
        this.observers.forEach(function (observer) { return observer.update(message); });
    };
    return NotificationCenter;
}());
// Usage
var notificationCenter = new NotificationCenter();
var phone = new Smartphone();
var tablet = new Tablet();
notificationCenter.attach(phone);
notificationCenter.attach(tablet);
notificationCenter.notify("New update available!");
