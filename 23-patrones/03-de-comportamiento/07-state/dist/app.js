import { HandleStates, Notification, ReadAndProcessNotification, } from "./state.js";
const handleStates = new HandleStates();
const readAndProcess = new ReadAndProcessNotification(handleStates);
readAndProcess.read(new Notification("LOAD_INDIVIDUAL01", {
    products: ["product01", "product02", "product03"],
}));
readAndProcess.read(new Notification("LOAD_INDIVIDUAL02", {
    products: ["product04", "product02", "product08"],
}));
readAndProcess.busy();
readAndProcess.read(new Notification("LOAD_MASSIVE01", {
    products: [
        "product01",
        "product02",
        "product03",
        "product04",
        "product05",
        "product06",
        "product07",
        "product08",
        "product09",
        "product10",
    ],
}));
readAndProcess.read(new Notification("LOAD_INDIVIDUAL03", {
    products: ["product04", "product02", "product08"],
}));
readAndProcess.available();
readAndProcess.read(new Notification("LOAD_MASSIVE02", {
    products: ["product04", "product02", "product08"],
}));
readAndProcess.read(new Notification("LOAD_INDIVIDUAL04", {
    products: ["product04"],
}));
