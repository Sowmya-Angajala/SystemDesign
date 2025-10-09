// Observer interface
interface Observer {
    update(message: string): void;
}

// Concrete Observers
class Smartphone implements Observer {
    update(message: string) {
        console.log(`Smartphone received notification: ${message}`);
    }
}

class Tablet implements Observer {
    update(message: string) {
        console.log(`Tablet received notification: ${message}`);
    }
}

// Subject
class NotificationCenter {
    private observers: Observer[] = [];

    attach(observer: Observer) {
        this.observers.push(observer);
        console.log(`Observer added: ${observer.constructor.name}`);
    }

    detach(observer: Observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
        console.log(`Observer removed: ${observer.constructor.name}`);
    }

    notify(message: string) {
        this.observers.forEach(observer => observer.update(message));
    }
}

// Usage
const notificationCenter = new NotificationCenter();
const phone = new Smartphone();
const tablet = new Tablet();

notificationCenter.attach(phone);
notificationCenter.attach(tablet);

notificationCenter.notify("New update available!");
