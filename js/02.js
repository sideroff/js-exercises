
function test() {
  return new Promise((resolve, reject) => {
    console.log('1');
    resolve();
    console.log('2');
    reject();
    console.log('3');
  })
}

console.log('4');

test().then(() => {
  console.log('5')
}).catch(() => {
  console.log('6')
})

console.log('7');
