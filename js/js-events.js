// Real interactivity on a website requires events handlers. These are code
// structures that listen for activity in the browser, and run code in response.
// The most obvious example is handling the click event, which is fired by the
// browser when you click on something with your mouse. To demonstrate this,
// enter the following into your console, then click on the current webpage:

document.querySelector('header').onclick = function() {
    alert('Ouch! Stop poking me!');
}

/* There are many ways to attach an event handler to an element. Here we select
the <html> element, setting its onclick handler property equal to an anonymous
(i.e. nameless) function, which contains the code we want the click event to
run.

Note that

document.querySelector('html').onclick = function() {};

is equivalent to

let myHTML = document.querySelector('html'); myHTML.onclick = function() {};
It's just shorter.

 */



// function with event attached to href in index file
// for example:   <a href="#" onclick="myFunction(this)">test</a>


function myFunction() {
  alert('hey');
}

