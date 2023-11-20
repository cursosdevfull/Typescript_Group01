//let username: string = 'Juan';
let username = "Juan";
//username = 20

username = "Juan Carlos";

let ageOfPatient: number;
let isUserLogged: boolean;
//let listPatients: string[] = ['Juan', 'Carlos', 'Pedro']
//let listPatients: Array<string> = ['Juan', 'Carlos', 'Pedro']
let listPatients = ["Juan", "Carlos", "Pedro"];
//listPatients.push(true)
let listPatientsWithAppointments: Array<{
  name: string;
  age: number;
  date: Date;
}> = [
  { name: "Juan", age: 20, date: new Date() },
  { name: "Carlos", age: 30, date: new Date() },
];

const listPatientsByCenter: Array<
  Array<{
    name: string;
    age: number;
    date: Date;
  }>
> = [
  [
    { name: "Juan", age: 20, date: new Date() },
    { name: "Carlos", age: 30, date: new Date() },
  ],
  [
    { name: "Pedro", age: 20, date: new Date() },
    { name: "Luis", age: 30, date: new Date() },
  ],
];

console.log(listPatientsByCenter);
