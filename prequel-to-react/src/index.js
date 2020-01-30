// console.log('Hello');
// console.log('Live reload working');

// // #1 Accept arguments instead of using global variables.
// function greet({
//     name,
//     address,
//     occupation
// }) {
//     // const {name} = whom;

//     // #2 Always return a value!
//     return `Hello, ${name} of ${address}`;
// }

// // function fromEarth(originalObject) {
// //     // add an address property
// //     // whose value is Earth
// //     // debugger;
// //     // const theAddress = originalObject.address || 'Earth';
// //     const modifiedVersionOfObject = {
// //         address: 'Earth',
// //         ...originalObject,
// //         // address: theAddress,
// //         age: 'infinity'
// //     }

// //     // if (!modifiedVersionOfObject.address) {
// //     //     modifiedVersionOfObject.address = 'Earth';
// //     // }

// //     // somebody.address = 'Earth';
// //     return modifiedVersionOfObject;
// //     // then return that object
// // }

// // console.log(greet('friend'));

// // const person = {
// //     name: 'friend',
// //     address: 'Atlanta',
// //     occupation: 'engineer'
// // };

// const persons = [
//     {name:'Alice', address:'Atlanta'},
//     {name:'Bob', address:'Tampa'},
//     {name:'Cthulu', address:'Pacific'}
// ];

// const modifiedPersons = [
//     'Daria',
//     ...persons
// ];

// function addressIsNotPacific(person) {
//     return person.address !== 'Pacific';
//     // if (person.address === 'Pacific') {
//     //     return false;
//     // } else {
//     //     return true;
//     // }
// }

// const noPacifics = persons.filter(({address}) => address !== 'Pacific');

// console.log(noPacifics);

// console.log(persons.filter(({address}) => address !== 'Pacific').map(greet));

// // console.log(fromEarth(person));
// // console.log(greet(person));

// console.log(modifiedPersons);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
