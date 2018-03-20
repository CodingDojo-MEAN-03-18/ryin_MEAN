function fib() {
  let prev = 0;
  let curr = 1;
  function nacci() {
    const sum = prev
    prev = curr;
    curr += sum;
    console.log(prev)
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
