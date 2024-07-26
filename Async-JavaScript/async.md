**synchronous JavaScript**

* It is blocking technique so the execution  of one task doesn't    dependent on other task before completition of one task.

* when one task is executed then other task did not run until first task is completed.

**Asynchronous JavaScript**

* It is a non-blocking technique so the execution  of one task doesn't dependent on other task  before completition of one task.

* It is an Single Threaded Programming Language: In Single threded at a time only one task can execute

**Execution Context**

* Execution context refers to it is only execute at a time only one line of code execute.

**Blocking Code**

* Block Flow of Program
* Read File synchronous


**Non-Blocking Code**

* Flow of Program did not effect during the execution
* Read File Asynchronous


**setTimeout()**

The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

In setTimeout There are two parameters in that method
* Handler : Give parameter function user declare in handler
* Timeout : In Timeout There is an delay between running of the function

* Syntax : setTimeout(function(){
    console.log("Hello World") 
<!-- content of user and set delay time in ms -->
},2000)

***drawback of setTimeout is when the program is execute the setTimeout function only runs at one time***


***In some cases user want to stop settimeout method in an event listner to do that we call a function cleartimeout and pass the event***



**setInterval**

* In setInterval method, in compare with setTimeout setInterval continous running , when the condition of clearinterval is called

In setInterval There are two parameters in that method
* Handler : Give parameter function user declare in handler
* Timeout : In Timeout There is an delay between running of the function

* Syntax : setInterval(function(){
    console.log("Hello World") 
<!-- content of user and set delay time in ms -->
},2000)

***In some cases user want to stop settimeout method in an event listner to do that we call a function clearInterval and pass the event***


**Callback Function**

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

**Promises**

* In JavaScript promises are a way to handle asynchrouous operations is an orgamized manner.

* they provide a clear syntax dealing with asychrounous code compare to traditional callback-based approaches.

* Promises are widely used for making n/w requests, read/write and other operations that are block the main therad.

* There can be three states : Pending,Fullfill or rejected.

* A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.

* For example, when you request data from the server by using a promise, it will be in a pending state. When the data arrives successfully, it will be in a fulfilled state. If an error occurs, then it will be in a rejected state.

**Promise Chaining**

promises can easily chained together using .then(), allowing you to sequence asynchronous operations.this is refer to the "Promise Chaining".


**Async Await**

* We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.



