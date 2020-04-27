// Closures We can access the variables of outer fn in the inner function.
// through Closures we can create private function implementation in JS
// Example below;
const counter = function () {
    var privateCounter =0;
    function changeByval(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeByval(1)
        },
        decrement: function() {
            changeByval(-1)
        },
        value: function() {
            return privateCounter;
        }
    }
    
};
const cu1 =counter();
console.log(cu1.value());
cu1.increment();
cu1.increment();cu1.increment();
cu1.increment();
console.log(cu1.value());
cu1.decrement();
cu1.decrement();
cu1.decrement();
console.log(cu1.value());