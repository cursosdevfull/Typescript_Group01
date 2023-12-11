import { DESTINATION_ENUM, IUpload, selectDestination } from './upload.js';

const file: File = new File(["data"], "file.txt", { type: "text/plain" });
const upload: IUpload = selectDestination(DESTINATION_ENUM.HARDDISK);
upload.save(file);
