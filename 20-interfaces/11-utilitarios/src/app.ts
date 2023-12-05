interface IUser {
  id: number;
  name: string;
  lastname: string;
  age?: number;
  email: string;
  password: string;
  address?: string;
  phone?: string;
}

interface UserEssentials {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password?: string;
}

interface UserOptionals {
  age: number;
  address: string;
  phone: string;
  gender: string;
}

type UserProperties = Required<UserEssentials> & Partial<UserOptionals>;

type UserFieldsUpdate = Partial<
  Pick<UserEssentials, "name" | "lastname" | "password"> &
    Omit<UserOptionals, "gender">
>;

class User implements UserProperties {
  id: number;
  name: string;
  lastname: string;
  age: number | undefined;
  email: string;
  password: string;
  address: string | undefined;
  phone: string | undefined;
  gender: string | undefined;

  constructor(
    props: UserProperties
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

  update(propsToUpdate: UserFieldsUpdate) {
    Object.assign(this, propsToUpdate);
  }
}

const userProps: Readonly<UserProperties> = {
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

const propsToUpdate: UserFieldsUpdate = {
  name: "Jane",
  phone: "123456789",
  //lastname: "Doe",
  //password: "321",
};

user.update(propsToUpdate);

console.log(user);

interface IUpload {
  save(file: File): Promise<string>;
}

class UploadAWS implements IUpload {
  save(file: File): Promise<string> {
    console.log("Uploading to AWS");
    return Promise.resolve("Uploading to AWS");
  }

  progress(): number {
    return 0;
  }
}

class UploadAzure implements IUpload {
  save(file: File): Promise<string> {
    console.log("Uploading to Azure");
    return Promise.resolve("Uploading to Azure");
  }
}

class UploadGoogle implements IUpload {
  save(file: File): Promise<string> {
    console.log("Uploading to Google");
    return Promise.resolve("Uploading to Google");
  }
}

enum CLOUD {
  aws = "aws",
  azure = "azure",
  google = "google",
}

type TYPE_CLOUD = "aws" | "azure" | "google";

interface IUploadFactory {
  [cloud: string]: IUpload;
}

//const factories: IUploadFactory = {
const factories: Record<TYPE_CLOUD, IUpload> = {
  aws: new UploadAWS(),
  azure: new UploadAzure(),
  google: new UploadGoogle(),
};

function SelectCloud(cloud: CLOUD): IUpload {
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

(async () => {
  const upload: IUpload = SelectCloud(CLOUD.azure);
  const file: File = new File(["data"], "file.txt", { type: "text/plain" });
  const status: Awaited<string> = await upload.save(file);
  console.log("status", status);
})();
