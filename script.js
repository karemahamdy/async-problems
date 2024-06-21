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

// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.
// function makeGetRequest(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => resolve(data))
//       .catch(error => reject(error));
//   });
// }
// makeGetRequest('https://example.com/data')

// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.
function fetchMiltiApis (url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

function displayAllApis (apisUrl){
  const promises = apisUrl.map(url => fetchMiltiApis(url))
  return Promise.all(promises)
}

const apisUrl = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
];

fetchMiltiApis(apisUrl)
  .then(results => {
    console.log('Combined Results:', results);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });


  // 