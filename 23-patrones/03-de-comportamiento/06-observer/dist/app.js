import { CreateAccess, SentEmailRegister, Subject, User } from "./observer.js";
const subject = new Subject();
subject.register(new SentEmailRegister());
subject.register(new CreateAccess());
const user = new User(subject, "Sergio", "Hidalgo", "sergio@email.com");
user.onCreate();
