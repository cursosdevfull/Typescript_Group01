interface IError {
  [key: string]: string | number;
}

const error1: IError = {
  status: 404,
  "message prod": "An error happened in production",
};

const error2: IError = {
  stack: "at line 86",
};

const environment: string = "prd";

if (environment === "dev") {
  console.log({ ...error1, ...error2 });
} else {
  console.log(error1);
}

// const error: IError = {
//   status: 404,
//   message: "Not found",
//   name: "Not found error",
//   stack: "at line 86",
// };
