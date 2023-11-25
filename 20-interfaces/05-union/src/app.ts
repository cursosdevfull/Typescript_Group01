interface Express {
  request: any;
  response: any;
  next: any;
}

interface Express {
  binaryToBody: any;
}

const express: Express = {
  request: {},
  response: {},
  next: {},
  binaryToBody: {},
};

console.log(express);
