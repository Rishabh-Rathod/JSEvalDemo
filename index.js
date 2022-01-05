// Import stylesheets
import './style.css';
import debounce from 'lodash/debounce';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let batchUpdates = [];

function informMainThread(batchUpdateData) {
  mainTheard.inform(batchUpdateData);
}

debounce(function () {
  informMainThread(batchUpdates);
  batchUpdates = [];
}, 50);

// Should be available in global scope of eval
function notify(update) {
  batchUpdates.push(update);
}

// eval only once
// define dataTree inside eval
// All widgets,actions,JS objects are global scoped in eval
// API to update dataTree values
// API to getUpdates when dataTree value changes

// how JSobjects this.SelfReference will work?
// solution: replace this with JSObject's name before eval.

// example to test

// example 1:-
// Text2.text = Text1.text;
// Text1.text = API.data;
// onResponse of API we need to store response in API.data
// then find change in values of updated dataTree
// if any value is changed when update that in mainThread so that widgets can show the update

// example 2:- with jsObjects
