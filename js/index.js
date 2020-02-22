function run() {
  var input = document.getElementById("input").value.split(" ");
  if (input.length >= 3) {
    main(parseInt(input[0]), parseInt(input[1]), parseInt(input[2]));
  } else {
    console.log("Please enter 3 numbers.");
  }
}

function main(a, b, c) {
  // Use a, b and c to help you!
  // TODO: Your code below.

}

var target = document.getElementById('target')

var divs = document.getElementsByTagName('div')
var stuff = document.getElementsByClassName('class1')
target.className += 'hidden'
function hello(e) {
  console.log(e);
}
window.addEventListener("resize", hello);