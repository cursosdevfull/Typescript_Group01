import { Box, Product } from "./composite.js";

const treeMain = new Box();

const simple = new Product(50);
treeMain.add(simple);

const box1 = new Box();
box1.add(new Product(10));
box1.add(new Product(20));

treeMain.add(box1);

const box2 = new Box();
box2.add(new Product(20));
box2.add(new Product(30));
box2.add(new Product(40));

treeMain.add(box2);

const box3 = new Box();
box3.add(new Product(200));
box3.add(new Product(300));
box3.add(new Product(400));

const box4 = new Box();
box4.add(new Product(2000));
box4.add(new Product(3000));
box4.add(new Product(4000));
box4.add(box3);

treeMain.add(box4);

console.log(treeMain.getPrice());
