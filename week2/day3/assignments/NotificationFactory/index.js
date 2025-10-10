// Notification classes
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.send = function (message) {
        console.log("Sending EMAIL: ".concat(message));
    };
    return EmailNotification;
}());
var SMSNotification = /** @class */ (function () {
    function SMSNotification() {
    }
    SMSNotification.prototype.send = function (message) {
        console.log("Sending SMS: ".concat(message));
    };
    return SMSNotification;
}());
var PushNotification = /** @class */ (function () {
    function PushNotification() {
    }
    PushNotification.prototype.send = function (message) {
        console.log("Sending PUSH: ".concat(message));
    };
    return PushNotification;
}());
// Factory
var NotificationFactory = /** @class */ (function () {
    function NotificationFactory() {
    }
    NotificationFactory.createNotification = function (type) {
        switch (type) {
            case "Email":
                return new EmailNotification();
            case "SMS":
                return new SMSNotification();
            case "Push":
                return new PushNotification();
            default:
                throw new Error("Invalid notification type");
        }
    };
    return NotificationFactory;
}());
// Example usage
var emailNotifier = NotificationFactory.createNotification("Email");
emailNotifier.send("Welcome!"); // Sending EMAIL: Welcome!
var smsNotifier = NotificationFactory.createNotification("SMS");
smsNotifier.send("Your OTP is 123456"); // Sending SMS: Your OTP is 123456
var pushNotifier = NotificationFactory.createNotification("Push");
pushNotifier.send("You have a new message!"); // Sending PUSH: You have a new message!
