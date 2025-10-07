// Abstraction
interface Database {
  save(data: string): void;
}

// Low-level module
class MySQLService implements Database {
  save(data: string) {
    console.log("Saving to MySQL:", data);
  }
}

// High-level module depending on abstraction
class UserService {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  register(user: string) {
    this.db.save(user);
  }
}

// Usage
const mysql = new MySQLService();
const userService = new UserService(mysql);
userService.register("John Doe");
