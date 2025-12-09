function simplePromiseDemo(success) {
    // Return a Promise
    return new Promise((resolve, reject) => {
        // Log "Promise is pending..."
        console.log("Promise is pending...");
        
        // Simulate a network request with setTimeout
        setTimeout(() => {
            if (success) {
                // Resolve the Promise with a success message
                resolve("Promise fulfilled: Data received!");
            } else {
                // Reject the Promise with an error message
                reject("Promise rejected: Error occurred!");
            }
        }, 2000);
    });
}

// Example usage:
// Demonstrate fulfilled state
simplePromiseDemo(true)
    .then((message) => {
        // Handle success
        console.log(message);
    })
    .catch((error) => {
        // Handle error
        console.log(error);
    });

// Demonstrate rejected state
simplePromiseDemo(false)
    .then((message) => {
        // Handle success
        console.log(message);
    })
    .catch((error) => {
        // Handle error
        console.log(error);
    });




 // practice with Promises in JavaScript


 function fetchData(success) {
    // Return a Promise
    return new Promise((resolve, reject) => {
        // Simulate a network request with setTimeout
        setTimeout(() => {
            if (success) {
                // Resolve the Promise with a success message
                resolve("Data fetched successfully!");
            } else {
                // Reject the Promise with an error message
                reject("Error fetching data!");
            }
        }, 2000);
    });
}

function processData(success) {
    // Call fetchData
    fetchData(success)
        .then((message) => {
            // Handle the success case with .then()
            console.log(message);
        })
        .catch((error) => {
            // Handle the failure case with .catch()
            console.log(error);
        });
}

// Simulate a successful request
processData(true);

// Simulate a failed request
processData(false);


// Fetching data using Promises 

function fetchData1() {
    // Return a Promise that resolves after 1 second
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from fetchData1");
        }, 1000);
    });
}

function fetchData2() {
    // Return a Promise that resolves after 2 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from fetchData2");
        }, 2000);
    });
}

function fetchData3() {
    // Return a Promise that resolves after 3 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from fetchData3");
        }, 3000);
    });
}

function fetchAllData() {
    // Use Promise.all() to execute all fetchData functions concurrently
    Promise.all([fetchData1(), fetchData2(), fetchData3()])
        .then((results) => {
            // Handle the resolved results
            console.log(results);
        })
        .catch((error) => {
            // Handle any rejected Promise
            console.log(error);
        });
}
fetchAllData();



// Promise.Any() example

function fetchData1() {
    // Return a Promise that rejects after 1 second
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Error from fetchData1");
        }, 1000);
    });
}

function fetchData2() {
    // Return a Promise that resolves after 2 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from fetchData2");
        }, 2000);
    });
}

function fetchData3() {
    // Return a Promise that resolves after 3 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from fetchData3");
        }, 3000);
    });
}

function fetchAnyData() {
    // Use Promise.any() to execute all fetchData functions concurrently
    Promise.any([fetchData1(), fetchData2(), fetchData3()])
        .then((result) => {
            // Handle the resolved result
            console.log(result);
        })
        .catch((error) => {
            // Handle any rejected Promise
            console.log(error);
        });
}

fetchAnyData();