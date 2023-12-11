import { DESTINATION_ENUM, selectDestination } from "./upload.js";
const file = new File(["data"], "file.txt", { type: "text/plain" });
const upload = selectDestination(DESTINATION_ENUM.HARDDISK);
upload.save(file);
