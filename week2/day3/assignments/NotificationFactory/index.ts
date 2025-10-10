// Notification classes
class EmailNotification {
    send(message) {
        console.log(`Sending EMAIL: ${message}`);
    }
}

class SMSNotification {
    send(message) {
        console.log(`Sending SMS: ${message}`);
    }
}

class PushNotification {
    send(message) {
        console.log(`Sending PUSH: ${message}`);
    }
}

// Factory
class NotificationFactory {
    static createNotification(type) {
        switch(type) {
            case "Email":
                return new EmailNotification();
            case "SMS":
                return new SMSNotification();
            case "Push":
                return new PushNotification();
            default:
                throw new Error("Invalid notification type");
        }
    }
}

// Example usage
const emailNotifier = NotificationFactory.createNotification("Email");
emailNotifier.send("Welcome!"); // Sending EMAIL: Welcome!

const smsNotifier = NotificationFactory.createNotification("SMS");
smsNotifier.send("Your OTP is 123456"); // Sending SMS: Your OTP is 123456

const pushNotifier = NotificationFactory.createNotification("Push");
pushNotifier.send("You have a new message!"); // Sending PUSH: You have a new message!
