// Import stylesheets
import './style.css';
import debounce from 'lodash/debounce';
import produce from 'immer';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Eval</h1>`;

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

// example to test

// example 1:-
// Text2.text = Text1.text;
// Text1.text = API.data;
// onResponse of API we need to store response in API.data
// then find change in values of updated dataTree
// if any value is changed when update that in mainThread so that widgets can show the update

// example 2:- with jsObjects

const GLOBAL_CONTEXT = {
  Input1: {
    text: 'hello',
  },
};

const nextState = produce(GLOBAL_CONTEXT, (draftState) => {});

Object.assign(globalThis, GLOBAL_CONTEXT);

const getFuncToEval = (codeSnippet, scope = {}) => {
  return new Function(codeSnippet);
};

const funcToEval = getFuncToEval(
  'console.log(Input1.text);Input1.text = Input1.text + 1;'
);
funcToEval();
