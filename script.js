// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
let invokeCallBack = function (callback){
  setTimeout (callback, 2000)
}
  function displayMessage(){
    console.log("hello")
}
invokeCallBack(displayMessage)

// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.
function asyncOperation1 (){
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("hello operation 1")
      resolve()
    }, 1000)
  });
}

function asyncOperation2 (){
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("hello operation 2")
      resolve()
    },2000)
  });
}

function asyncOperation3 (){
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("hello operation 3")
      resolve()
    }, 3000)
  });
}

async function displayOperations() {
  try {
    await asyncOperation1();
    await asyncOperation2();
    await asyncOperation3();
    console.log('done');
  } catch (error) {
    console.log('Error:', error.message);
  }
}

displayOperations();