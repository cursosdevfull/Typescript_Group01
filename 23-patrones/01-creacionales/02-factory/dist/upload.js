export class UploadAWS {
    save(file) {
        this.setCredentials();
        console.log(`Uploading ${file.name} to AWS`);
    }
    setCredentials() {
        console.log(`Setting AWS credentials`);
    }
}
export class UploadGoogle {
    save(file) {
        console.log(`Uploading ${file.name} to Google`);
    }
}
export class UploadAzure {
    save(file) {
        console.log(`Uploading ${file.name} to Azure`);
    }
}
export class UploadHardDisk {
    save(file) {
        console.log(`Uploading ${file.name} to Hard Disk`);
    }
}
export var DESTINATION_ENUM;
(function (DESTINATION_ENUM) {
    DESTINATION_ENUM["AWS"] = "aws";
    DESTINATION_ENUM["GOOGLE"] = "google";
    DESTINATION_ENUM["AZURE"] = "azure";
    DESTINATION_ENUM["HARDDISK"] = "harddisk";
})(DESTINATION_ENUM || (DESTINATION_ENUM = {}));
const classesDestinations = {
    aws: new UploadAWS(),
    google: new UploadGoogle(),
    azure: new UploadAzure(),
    harddisk: new UploadHardDisk(),
};
export function selectDestination(destination) {
    return classesDestinations[destination];
}
