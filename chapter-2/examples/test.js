function assert(condition, message) {
  if (!condition) {
    //debugger; // Pause and examine ;)
    testFailed(message || "Test failed");
    throw message || "Test failed";
  }
}
function assertEquals(a, b, message) {
  assert(a === b, message || a + " does not equal " + b);
}
function testFailed(message) {
  document.body.style.background = "#990012";
  document.body.innerHTML = "<h1 style='color: white'>" + message + "</h1>";
}
function testPassed() {
  document.body.style.background = "#347C17";
  document.body.innerHTML = "<h1 style='color: white'>Test Passed</h1>";
}
function notImplemented(name) {
  var message = (name || "something") + " is not implemented yet!";
  document.body.style.background = "#FFD801";
  document.body.innerHTML = "<h1 style='color: #0026FF'>" + message + "</h1>";
  throw message;
}
