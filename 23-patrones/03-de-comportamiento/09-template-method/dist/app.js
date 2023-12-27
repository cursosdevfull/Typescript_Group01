var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SucursalArequipa, SucursalLima } from "./template-method.js";
const dataJSON = [
    {
        title: "Título 1",
        price: 50,
    },
    {
        title: "Título 1",
        price: 80,
    },
    {
        title: "Título 1",
        price: 70,
    },
    {
        title: "Título 2",
        price: 40,
    },
    {
        title: "Título 2",
        price: 60,
    },
];
const dataXML = `
<sales>
	<book>
		<title>Título 1</title>
		<price>50</price>
	</book>
	<book>
		<title>Título 1</title>
		<price>80</price>
	</book>
	<book>
		<title>Título 1</title>
		<price>70</price>
	</book>
	<book>
		<title>Título 2</title>
		<price>40</price>
	</book>
	<book>
		<title>Título 2</title>
		<price>60</price>
	</book>
</sales>
`;
(() => __awaiter(void 0, void 0, void 0, function* () {
    const dataRest = new SucursalLima(dataJSON);
    const dataSOAP = new SucursalArequipa(dataXML);
    const data1 = yield dataRest.getSummary();
    const data2 = yield dataSOAP.getSummary();
    console.log(data1);
    console.log(data2);
}))();
