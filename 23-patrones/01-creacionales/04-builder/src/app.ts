import { UploadBuilder, UploadOptions } from "./builder.js";

const uploadOptions: UploadOptions = new UploadBuilder()
  .addFiles([
    new File([""], "file1.png", { type: "image/png" }),
    new File([""], "file2.jpeg", { type: "image/jpeg" }),
  ])
  .addMimeTypesAllowed(["image/png", "image/jpeg"])
  .addMaxSize(1000000)
  .addIsPublic(true)
  .addHasCors(true)
  .addHasAuthToUpload(true)
  .addHasAuthToDownload(true)
  .addHasAuthToDelete(true)
  .addHasAuthToEdit(true)
  .addHasAuthToShare(true)
  .addHasAuthToUnshare(true)
  .addHasAuthToCreateFolder(true)
  .addHasAuthToDeleteFolder(true)
  .addHasAuthToEditFolder(true)
  .addHasAuthToShareFolder(true)
  .addDirectory("/home/user")
  .build();

console.log(uploadOptions);
