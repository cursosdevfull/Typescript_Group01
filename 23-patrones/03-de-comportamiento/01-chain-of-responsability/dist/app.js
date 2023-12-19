import { Authentication, Authorization, Validate, } from "./chain-of-responsability.js";
const request = {
    params: {
        id: 20,
    },
    headers: {
        token: "123456",
        roles: ["admin", "user"],
    },
};
const authentication = new Authentication(request);
const authorization = new Authorization(request);
const validate = new Validate(request);
authentication.setNext(authorization);
authorization.setNext(validate);
authentication.execute();
