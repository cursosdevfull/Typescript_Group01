"use strict";
const error1 = {
    status: 404,
    "message prod": "An error happened in production",
};
const error2 = {
    stack: "at line 86",
};
const environment = "prd";
if (environment === "dev") {
    console.log(Object.assign(Object.assign({}, error1), error2));
}
else {
    console.log(error1);
}
// const error: IError = {
//   status: 404,
//   message: "Not found",
//   name: "Not found error",
//   stack: "at line 86",
// };
