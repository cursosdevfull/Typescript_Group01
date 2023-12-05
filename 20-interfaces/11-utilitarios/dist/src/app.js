var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class User {
    constructor(props
    // id: number,
    // name: string,
    // lastname: string,
    // email: string,
    // password: string,
    // age?: number,
    // address?: string,
    // phone?: string
    ) {
        Object.assign(this, props);
        // this.id = props.id;
        // this.name = props.name;
        // this.lastname = props.lastname;
        // if (props.age) this.age = props.age;
        // this.email = props.email;
        // this.password = props.password;
        // if (props.address) this.address = props.address;
        // if (props.phone) this.phone = props.phone;
    }
    update(propsToUpdate) {
        Object.assign(this, propsToUpdate);
    }
}
const userProps = {
    id: 1,
    name: "John",
    lastname: "Doe",
    email: "john@email.com",
    password: "123",
    age: 50,
    gender: "male",
};
//Object.freeze(userProps);
//userProps.id = 200;
const user = new User(userProps);
console.log(user);
const propsToUpdate = {
    name: "Jane",
    phone: "123456789",
    //lastname: "Doe",
    //password: "321",
};
user.update(propsToUpdate);
console.log(user);
class UploadAWS {
    save(file) {
        console.log("Uploading to AWS");
        return Promise.resolve("Uploading to AWS");
    }
    progress() {
        return 0;
    }
}
class UploadAzure {
    save(file) {
        console.log("Uploading to Azure");
        return Promise.resolve("Uploading to Azure");
    }
}
class UploadGoogle {
    save(file) {
        console.log("Uploading to Google");
        return Promise.resolve("Uploading to Google");
    }
}
var CLOUD;
(function (CLOUD) {
    CLOUD["aws"] = "aws";
    CLOUD["azure"] = "azure";
    CLOUD["google"] = "google";
})(CLOUD || (CLOUD = {}));
//const factories: IUploadFactory = {
const factories = {
    aws: new UploadAWS(),
    azure: new UploadAzure(),
    google: new UploadGoogle(),
};
function SelectCloud(cloud) {
    return factories[cloud];
    // switch (cloud) {
    //   case "aws":
    //     return new UploadAWS();
    //   case "azure":
    //     return new UploadAzure();
    //   case "google":
    //     return new UploadGoogle();
    // }
}
// const uploadAWS: IUpload = new UploadAWS();
// const file: File = new File(["data"], "file.txt", { type: "text/plain" });
// uploadAWS.save(file);
// async function startUpload() {
//   const upload: IUpload = SelectCloud(CLOUD.aws);
//   const file: File = new File(["data"], "file.txt", { type: "text/plain" });
//   console.log(await upload.save(file));
// }
// startUpload();
(() => __awaiter(this, void 0, void 0, function* () {
    const upload = SelectCloud(CLOUD.azure);
    const file = new File(["data"], "file.txt", { type: "text/plain" });
    const status = yield upload.save(file);
    console.log("status", status);
}))();
//# sourceMappingURL=app.js.map