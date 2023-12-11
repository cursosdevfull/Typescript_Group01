export interface IUpload {
  save(file: File): void;
}

export class UploadAWS implements IUpload {
  save(file: File): void {
    this.setCredentials();
    console.log(`Uploading ${file.name} to AWS`);
  }

  setCredentials(): void {
    console.log(`Setting AWS credentials`);
  }
}

export class UploadGoogle implements IUpload {
  save(file: File): void {
    console.log(`Uploading ${file.name} to Google`);
  }
}

export class UploadAzure implements IUpload {
  save(file: File): void {
    console.log(`Uploading ${file.name} to Azure`);
  }
}

export class UploadHardDisk implements IUpload {
  save(file: File): void {
    console.log(`Uploading ${file.name} to Hard Disk`);
  }
}

export type DESTINATION = "aws" | "google" | "azure" | "harddisk";
export enum DESTINATION_ENUM {
  AWS = "aws",
  GOOGLE = "google",
  AZURE = "azure",
  HARDDISK = "harddisk",
}

const classesDestinations: Record<DESTINATION, IUpload> = {
  aws: new UploadAWS(),
  google: new UploadGoogle(),
  azure: new UploadAzure(),
  harddisk: new UploadHardDisk(),
};

export function selectDestination(destination: DESTINATION): IUpload {
  return classesDestinations[destination];
}
