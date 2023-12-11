export class UploadBuilder {
  private files: File[] = [];
  private mimeTypesAllowed: string[] = [];
  private maxSize: number = 0;
  private isPublic: boolean = false;
  private hasCors: boolean = false;
  private hasAuthToUpload: boolean = false;
  private hasAuthToDownload: boolean = false;
  private hasAuthToDelete: boolean = false;
  private hasAuthToEdit: boolean = false;
  private hasAuthToShare: boolean = false;
  private hasAuthToUnshare: boolean = false;
  private hasAuthToCreateFolder: boolean = false;
  private hasAuthToDeleteFolder: boolean = false;
  private hasAuthToEditFolder: boolean = false;
  private hasAuthToShareFolder: boolean = false;
  private directory: string = "";

  addFiles(files: File[]): UploadBuilder {
    this.files = files;
    return this;
  }

  addMimeTypesAllowed(mimeTypesAllowed: string[]): UploadBuilder {
    this.mimeTypesAllowed = mimeTypesAllowed;
    return this;
  }

  addMaxSize(maxSize: number): UploadBuilder {
    this.maxSize = maxSize;
    return this;
  }

  addIsPublic(isPublic: boolean): UploadBuilder {
    this.isPublic = isPublic;
    return this;
  }

  addHasCors(hasCors: boolean): UploadBuilder {
    this.hasCors = hasCors;
    return this;
  }

  addHasAuthToUpload(hasAuthToUpload: boolean): UploadBuilder {
    this.hasAuthToUpload = hasAuthToUpload;
    return this;
  }

  addHasAuthToDownload(hasAuthToDownload: boolean): UploadBuilder {
    this.hasAuthToDownload = hasAuthToDownload;
    return this;
  }

  addHasAuthToDelete(hasAuthToDelete: boolean): UploadBuilder {
    this.hasAuthToDelete = hasAuthToDelete;
    return this;
  }

  addHasAuthToEdit(hasAuthToEdit: boolean): UploadBuilder {
    this.hasAuthToEdit = hasAuthToEdit;
    return this;
  }

  addHasAuthToShare(hasAuthToShare: boolean): UploadBuilder {
    this.hasAuthToShare = hasAuthToShare;
    return this;
  }

  addHasAuthToUnshare(hasAuthToUnshare: boolean): UploadBuilder {
    this.hasAuthToUnshare = hasAuthToUnshare;
    return this;
  }

  addHasAuthToCreateFolder(hasAuthToCreateFolder: boolean): UploadBuilder {
    this.hasAuthToCreateFolder = hasAuthToCreateFolder;
    return this;
  }

  addHasAuthToDeleteFolder(hasAuthToDeleteFolder: boolean): UploadBuilder {
    this.hasAuthToDeleteFolder = hasAuthToDeleteFolder;
    return this;
  }

  addHasAuthToEditFolder(hasAuthToEditFolder: boolean): UploadBuilder {
    this.hasAuthToEditFolder = hasAuthToEditFolder;
    return this;
  }

  addHasAuthToShareFolder(hasAuthToShareFolder: boolean): UploadBuilder {
    this.hasAuthToShareFolder = hasAuthToShareFolder;
    return this;
  }

  addDirectory(directory: string): UploadBuilder {
    this.directory = directory;
    return this;
  }

  build(): UploadOptions {
    return new UploadOptions(this);
  }
}

export class UploadOptions {
  private files: File[] = [];
  private mimeTypesAllowed: string[] = [];
  private maxSize: number = 0;
  private isPublic: boolean = false;
  private hasCors: boolean = false;
  private hasAuthToUpload: boolean = false;
  private hasAuthToDownload: boolean = false;
  private hasAuthToDelete: boolean = false;
  private hasAuthToEdit: boolean = false;
  private hasAuthToShare: boolean = false;
  private hasAuthToUnshare: boolean = false;
  private hasAuthToCreateFolder: boolean = false;
  private hasAuthToDeleteFolder: boolean = false;
  private hasAuthToEditFolder: boolean = false;
  private hasAuthToShareFolder: boolean = false;
  private directory: string = "";

  constructor(builder: UploadBuilder) {
    Object.assign(this, builder);
  }
}
