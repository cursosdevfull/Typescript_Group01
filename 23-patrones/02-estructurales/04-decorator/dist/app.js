import { NotificationBase, NotificationByEmail, NotificationByPush, NotificationBySMS, NotificationByWhatsapp, } from "./decorator.js";
const message = {
    name: "John Doe",
    text: "Hello world",
    email: "john.doe@email.com",
    phone: "555-555-555",
};
const notification = new NotificationBase(message);
const notificationSMS = new NotificationBySMS(notification);
const notificationEmail = new NotificationByEmail(notificationSMS);
const notificationWhatsapp = new NotificationByWhatsapp(notificationEmail);
const notificationPush = new NotificationByPush(notificationWhatsapp);
notificationPush.send();
