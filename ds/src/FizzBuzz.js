function FizBuz(num) {
    for (let index = 1; index <= num; index++) {
        if (index % 5 == 0 && index % 3 == 0) console.log('FIZZBUZZZ');
        else if (index % 3 === 0) console.log('FIZZ');
        else if (index % 5 === 0) console.log('BUZZZ');
        else console.log(index);

    }
}

FizBuz(20);
// sample output
/*1
2
FIZZ
4
BUZZZ
FIZZ
7
8
FIZZ
BUZZZ
11
FIZZ
13
14
FIZZBUZZZ
16
17
FIZZ
19
BUZZZ
*/