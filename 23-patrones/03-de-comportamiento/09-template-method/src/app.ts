import { Data, SucursalArequipa, SucursalLima } from "./template-method.js";

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

(async () => {
  const dataRest: Data = new SucursalLima(dataJSON);
  const dataSOAP: Data = new SucursalArequipa(dataXML);

  const data1 = await dataRest.getSummary();
  const data2 = await dataSOAP.getSummary();

  console.log(data1);
  console.log(data2);
})();
