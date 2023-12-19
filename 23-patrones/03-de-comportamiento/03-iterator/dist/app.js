import { NotificationsPending } from "./iterator.js";
const notifications = new NotificationsPending();
notifications.addNotification("LOAD_INDIVIDUAL", { campaign: "202012" });
notifications.addNotification("LOAD_GROUP", { campaign: "202102" });
notifications.addNotification("LOAD_INDIVIDUAL", { campaign: "202301" });
notifications.addNotification("LOAD_INDIVIDUAL", { campaign: "202302" });
notifications.addNotification("LOAD_INDIVIDUAL", { campaign: "202304" });
notifications.addNotification("LOAD_GROUP", { campaign: "202310" });
const iterator = notifications.createIterator();
while (iterator.hasNext()) {
    const notification = iterator.next();
    console.log(notification);
}
