class TaskManager {
  createTask(name: string) {
    console.log(`Creating task: ${name}`);
  }
}

class EmailService {
  sendEmail(to: string) {
    console.log(`Sending email to ${to}`);
  }
}

const taskManager = new TaskManager();
taskManager.createTask("Finish project report");

const emailService = new EmailService();
emailService.sendEmail("example@mail.com");
