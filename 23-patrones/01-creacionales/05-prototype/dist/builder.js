export class UploadBuilder {
    constructor() {
        this.files = [];
        this.mimeTypesAllowed = [];
        this.maxSize = 0;
        this.isPublic = false;
        this.hasCors = false;
        this.hasAuthToUpload = false;
        this.hasAuthToDownload = false;
        this.hasAuthToDelete = false;
        this.hasAuthToEdit = false;
        this.hasAuthToShare = false;
        this.hasAuthToUnshare = false;
        this.hasAuthToCreateFolder = false;
        this.hasAuthToDeleteFolder = false;
        this.hasAuthToEditFolder = false;
        this.hasAuthToShareFolder = false;
        this.directory = "";
    }
    addFiles(files) {
        this.files = files;
        return this;
    }
    addMimeTypesAllowed(mimeTypesAllowed) {
        this.mimeTypesAllowed = mimeTypesAllowed;
        return this;
    }
    addMaxSize(maxSize) {
        this.maxSize = maxSize;
        return this;
    }
    addIsPublic(isPublic) {
        this.isPublic = isPublic;
        return this;
    }
    addHasCors(hasCors) {
        this.hasCors = hasCors;
        return this;
    }
    addHasAuthToUpload(hasAuthToUpload) {
        this.hasAuthToUpload = hasAuthToUpload;
        return this;
    }
    addHasAuthToDownload(hasAuthToDownload) {
        this.hasAuthToDownload = hasAuthToDownload;
        return this;
    }
    addHasAuthToDelete(hasAuthToDelete) {
        this.hasAuthToDelete = hasAuthToDelete;
        return this;
    }
    addHasAuthToEdit(hasAuthToEdit) {
        this.hasAuthToEdit = hasAuthToEdit;
        return this;
    }
    addHasAuthToShare(hasAuthToShare) {
        this.hasAuthToShare = hasAuthToShare;
        return this;
    }
    addHasAuthToUnshare(hasAuthToUnshare) {
        this.hasAuthToUnshare = hasAuthToUnshare;
        return this;
    }
    addHasAuthToCreateFolder(hasAuthToCreateFolder) {
        this.hasAuthToCreateFolder = hasAuthToCreateFolder;
        return this;
    }
    addHasAuthToDeleteFolder(hasAuthToDeleteFolder) {
        this.hasAuthToDeleteFolder = hasAuthToDeleteFolder;
        return this;
    }
    addHasAuthToEditFolder(hasAuthToEditFolder) {
        this.hasAuthToEditFolder = hasAuthToEditFolder;
        return this;
    }
    addHasAuthToShareFolder(hasAuthToShareFolder) {
        this.hasAuthToShareFolder = hasAuthToShareFolder;
        return this;
    }
    addDirectory(directory) {
        this.directory = directory;
        return this;
    }
    build() {
        return new UploadOptions(this);
    }
}
export class UploadOptions {
    constructor(builder) {
        this.files = [];
        this.mimeTypesAllowed = [];
        this.maxSize = 0;
        this.isPublic = false;
        this.hasCors = false;
        this.hasAuthToUpload = false;
        this.hasAuthToDownload = false;
        this.hasAuthToDelete = false;
        this.hasAuthToEdit = false;
        this.hasAuthToShare = false;
        this.hasAuthToUnshare = false;
        this.hasAuthToCreateFolder = false;
        this.hasAuthToDeleteFolder = false;
        this.hasAuthToEditFolder = false;
        this.hasAuthToShareFolder = false;
        this.directory = "";
        Object.assign(this, builder);
    }
}
