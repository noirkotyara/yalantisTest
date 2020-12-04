import React from 'react';
import ReactDOM from 'react-dom';
import Employees from './Employees';

const { act } = require("react-dom/test-utils");
const { addItemsAC, setUsersAC } = require("../Redux/emloyees-reducer");

let monthsArray= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
let monthsA = monthsArray.map(month => {return {name: month, id: []}});

let initial = {
    items: [
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
          },
          {
            "id": "5e00928d1a9ac4bd431ff876",
            "firstName": "Toni",
            "lastName": "Albert",
            "dob": "2019-03-23T01:30:35.337Z"
          }
    ],
    months: monthsA
}
// props.    
// addItemsAC
// setUsersAC
// items
// months
let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

it('is input exist? ', () => {
    act(() => {
      ReactDOM.render(<Employees items={initial.items} months={initial.months} addItems={addItemsAC} setUsers={setUsersAC}/>, container);
    });
    const button = container.querySelector('input[id="5e00928d1a9ac4bd431ff876"]');
    expect(button).toBeTruthy();
    
  });

it('check render of Alphabet', () => {
    act(() => {
      ReactDOM.render(<Employees items={initial.items} months={initial.months} addItems={addItemsAC} setUsers={setUsersAC}/>, container);
    });
    const div = container.querySelectorAll('div[id="alphabet"]');
    expect(div.length).toBe(26);
  });


  it('choosed checkbox changed on true ', () => {
    act(() => {
      ReactDOM.render(<Employees items={initial.items} months={initial.months} addItems={addItemsAC} setUsers={setUsersAC}/>, container);
    });
    const button = container.querySelector('input[id="5e00928d1a9ac4bd431ff876"]');
    act(() => {
        button.dispatchEvent(new MouseEvent('click', {checked: true}));
      });
    expect(button.checked).toBeTruthy();
  });
