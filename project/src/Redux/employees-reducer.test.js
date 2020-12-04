import employeesPage, { addItemsAC, setUsersAC } from './emloyees-reducer';

let monthsArray= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
let monthsA = monthsArray.map(month => {return {name: month, id: []}});

let initialState = {
  items: [],
  months: monthsA
}

test('add items to the array', () => {
  let action = addItemsAC([
    {id:121313, name:'Adele', birth: '13.02.2013'},
    {id:123413, name:'Adele', birth: '13.02.2013'}
  ]);
  let newState = employeesPage(initialState,action);
  expect(newState.items.length).toBe(2);
});

test('set users to the checked list of users', () => {
  let action = addItemsAC([
   {
    "id": "5e00928d91e7feaa9872ec08",
    "firstName": "Yang",
    "lastName": "Carson",
    "dob": "2019-02-26T16:52:36.244Z"
  },
  {
    "id": "5e00928df892b0c84c82db9d",
    "firstName": "Dorsey",
    "lastName": "Meadows",
    "dob": "2019-09-19T09:34:32.083Z"
  },
  {
    "id": "5e00928dea77bb8b9a15bdc2",
    "firstName": "Roxanne",
    "lastName": "Salas",
    "dob": "2019-07-13T07:19:20.718Z"
  },
  {
    "id": "5e00928db89ff9c2559f9560",
    "firstName": "Watson",
    "lastName": "Good",
    "dob": "2019-05-09T03:24:32.532Z"
  },
  {
    "id": "5e00928d43fcdd11688a6afd",
    "firstName": "Moody",
    "lastName": "Gordon",
    "dob": "2019-11-09T20:20:43.744Z"
  }]);

  let newState1 = employeesPage(initialState,action);
  expect(newState1.items.length).toBe(5);
  let action2 = setUsersAC(['5e00928dea77bb8b9a15bdc2','5e00928db89ff9c2559f9560'])
  let newState = employeesPage(newState1 ,action2);
  expect(newState.months[5].id.length).toBe(1);
  expect(newState.months[7].id.length).toBe(1);
});
