
(function test() {
  console.log('1');
})();

console.log('2');

setTimeout(() => {
  console.log('3');
}, 0);

console.log('4');

test();