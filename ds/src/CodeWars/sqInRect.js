function sqInRect(lng, wdth) {
    if (wdth === lng) return null;

    let rectArea = (lng * wdth);
    console.log(lng, wdth);
    let resultArray = [];
   

    let remainingWidth = lng > wdth ? wdth : lng;
    let remainingValue = remainingWidth*remainingWidth;

    while (remainingValue !== 0) {
        lng=lng-remainingWidth;
       remainingWidth=lng > wdth ? wdth : lng;

        let LastSqrt = Math.floor(Math.sqrt(remainingValue));
        remainingValue = remainingValue - (LastSqrt * LastSqrt);
        resultArray.push(LastSqrt);
    }
    return resultArray
}


console.log(sqInRect(3, 5));

console.log(sqInRect(20, 14));
console.log(sqInRect(240, 32));
// 240 32
// Expected: '[230, 230, 165, 65, 65, 35, 30, 5, 5, 5, 5, 5, 5]', instead got: '[379, 10, 3]'

/*

Time: 1087ms Passed: 2 Failed: 48 Exit Code: 1
Test Results:
 Basic tests
 Log
5 5
Expected: 'null', instead got: '[5]'
 Log
5 3
Test Passed: Value == '[3, 2, 1, 1]'
 Log
3 5
Test Passed: Value == '[3, 2, 1, 1]'
 Log
20 14
Expected: '[14, 6, 6, 2, 2, 2]', instead got: '[16, 4, 2, 2]'
 Log
14 20
Expected: '[14, 6, 6, 2, 2, 2]', instead got: '[16, 4, 2, 2]'
 Log
240 32
Expected: '[32, 32, 32, 32, 32, 32, 32, 16, 16]', instead got: '[87, 10, 3, 1, 1]'
 Log
6250 250
Expected: '[250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250]', instead got: '[1250]'
 Log
625 230
Expected: '[230, 230, 165, 65, 65, 35, 30, 5, 5, 5, 5, 5, 5]', instead got: '[379, 10, 3]'
 Log
731 230
Expected: '[230, 230, 230, 41, 41, 41, 41, 41, 25, 16, 9, 7, 2, 2, 2, 1, 1]', instead got: '[410, 5, 2, 1]'
 Log
37 14
Expected: '[14, 14, 9, 5, 4, 1, 1, 1, 1]', instead got: '[22, 5, 3]'
Completed in 5ms
 Random tests
 Testing for sqInRect(13, 17)
 Log
13 17
It should work for random inputs too - Expected: '[13, 4, 4, 4, 1, 1, 1, 1]', instead got: '[14, 5]'
 Testing for sqInRect(189, 138)
 Log
189 138
It should work for random inputs too - Expected: '[138, 51, 51, 36, 15, 15, 6, 6, 3, 3]', instead got: '[161, 12, 4, 1]'
 Testing for sqInRect(14, 20)
 Log
14 20
It should work for random inputs too - Expected: '[14, 6, 6, 2, 2, 2]', instead got: '[16, 4, 2, 2]'
Completed in 1ms
 Testing for sqInRect(15, 17)
 Log
15 17
It should work for random inputs too - Expected: '[15, 2, 2, 2, 2, 2, 2, 2, 1, 1]', instead got: '[15, 5, 2, 1]'
 Testing for sqInRect(161, 144)
 Log
161 144
It should work for random inputs too - Expected: '[144, 17, 17, 17, 17, 17, 17, 17, 17, 8, 8, 1, 1, 1, 1, 1, 1, 1, 1]', instead got: '[152, 8, 4]'
 Testing for sqInRect(5, 20)
 Log
5 20
It should work for random inputs too - Expected: '[5, 5, 5, 5]', instead got: '[10]'
Completed in 1ms
 Testing for sqInRect(16, 68)
 Log
16 68
It should work for random inputs too - Expected: '[16, 16, 16, 16, 4, 4, 4, 4]', instead got: '[32, 8]'
 Testing for sqInRect(8, 7)
 Log
8 7
It should work for random inputs too - Expected: '[7, 1, 1, 1, 1, 1, 1, 1]', instead got: '[7, 2, 1, 1, 1]'
 Testing for sqInRect(146, 176)
 Log
146 176
It should work for random inputs too - Expected: '[146, 30, 30, 30, 30, 26, 4, 4, 4, 4, 4, 4, 2, 2]', instead got: '[160, 9, 3, 2, 1, 1]'
 Testing for sqInRect(17, 4)
 Log
17 4
It should work for random inputs too - Expected: '[4, 4, 4, 4, 1, 1, 1, 1]', instead got: '[8, 2]'
Completed in 1ms
 Testing for sqInRect(98, 61)
 Log
98 61
It should work for random inputs too - Expected: '[61, 37, 24, 13, 11, 2, 2, 2, 2, 2, 1, 1]', instead got: '[77, 7]'
 Testing for sqInRect(5, 15)
 Log
5 15
It should work for random inputs too - Expected: '[5, 5, 5]', instead got: '[8, 3, 1, 1]'
 Testing for sqInRect(18, 20)
 Log
18 20
It should work for random inputs too - Expected: '[18, 2, 2, 2, 2, 2, 2, 2, 2, 2]', instead got: '[18, 6]'
 Testing for sqInRect(8, 10)
 Log
8 10
It should work for random inputs too - Expected: '[8, 2, 2, 2, 2]', instead got: '[8, 4]'
 Testing for sqInRect(13, 11)
 Log
13 11
It should work for random inputs too - Expected: '[11, 2, 2, 2, 2, 2, 1, 1]', instead got: '[11, 4, 2, 1, 1]'
Completed in 1ms
 Testing for sqInRect(5, 10)
 Log
5 10
It should work for random inputs too - Expected: '[5, 5]', instead got: '[7, 1]'
 Testing for sqInRect(97, 28)
 Log
97 28
It should work for random inputs too - Expected: '[28, 28, 28, 13, 13, 2, 2, 2, 2, 2, 2, 1, 1]', instead got: '[52, 3, 1, 1, 1]'
 Testing for sqInRect(18, 2)
 Log
18 2
It should work for random inputs too - Expected: '[2, 2, 2, 2, 2, 2, 2, 2, 2]', instead got: '[6]'
 Testing for sqInRect(9, 3)
 Log
9 3
It should work for random inputs too - Expected: '[3, 3, 3]', instead got: '[5, 1, 1]'
Completed in 2ms
 Testing for sqInRect(16, 1)
 Log
16 1
It should work for random inputs too - Expected: '[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]', instead got: '[4]'
 Testing for sqInRect(20, 16)
 Log
20 16
It should work for random inputs too - Expected: '[16, 4, 4, 4, 4]', instead got: '[17, 5, 2, 1, 1]'
 Testing for sqInRect(11, 12)
 Log
11 12
It should work for random inputs too - Expected: '[11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]', instead got: '[11, 3, 1, 1]'
 Testing for sqInRect(164, 129)
 Log
164 129
It should work for random inputs too - Expected: '[129, 35, 35, 35, 24, 11, 11, 2, 2, 2, 2, 2, 1, 1]', instead got: '[145, 11, 3, 1]'
 Testing for sqInRect(12, 9)
 Log
12 9
It should work for random inputs too - Expected: '[9, 3, 3, 3]', instead got: '[10, 2, 2]'
 Testing for sqInRect(103, 116)
 Log
103 116
It should work for random inputs too - Expected: '[103, 13, 13, 13, 13, 13, 13, 13, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]', instead got: '[109, 8, 1, 1, 1]'
 Testing for sqInRect(26, 99)
 Log
26 99
It should work for random inputs too - Expected: '[26, 26, 26, 21, 5, 5, 5, 5, 1, 1, 1, 1, 1]', instead got: '[50, 8, 3, 1]'
 Testing for sqInRect(51, 179)
 Log
51 179
It should work for random inputs too - Expected: '[51, 51, 51, 26, 25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]', instead got: '[95, 10, 2]'
Completed in 1ms
 Testing for sqInRect(14, 127)
 Log
14 127
It should work for random inputs too - Expected: '[14, 14, 14, 14, 14, 14, 14, 14, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]', instead got: '[42, 3, 2, 1]'
 Testing for sqInRect(22, 63)
 Log
22 63
It should work for random inputs too - Expected: '[22, 22, 19, 3, 3, 3, 3, 3, 3, 1, 1, 1]', instead got: '[37, 4, 1]'
 Testing for sqInRect(5, 9)
 Log
5 9
It should work for random inputs too - Expected: '[5, 4, 1, 1, 1, 1]', instead got: '[6, 3]'
 Testing for sqInRect(183, 53)
 Log
183 53
It should work for random inputs too - Expected: '[53, 53, 53, 24, 24, 5, 5, 5, 5, 4, 1, 1, 1, 1]', instead got: '[98, 9, 3, 2, 1]'
Completed in 1ms
 Testing for sqInRect(19, 19)
 Log
19 19
It should work for random inputs too - Expected: 'null', instead got: '[19]'
 Testing for sqInRect(93, 184)
 Log
93 184
It should work for random inputs too - Expected: '[93, 91, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1]', instead got: '[130, 14, 4]'
 Testing for sqInRect(93, 103)
 Log
93 103
It should work for random inputs too - Expected: '[93, 10, 10, 10, 10, 10, 10, 10, 10, 10, 3, 3, 3, 1, 1, 1]', instead got: '[97, 13, 1]'
 Testing for sqInRect(47, 64)
 Log
47 64
It should work for random inputs too - Expected: '[47, 17, 17, 13, 4, 4, 4, 1, 1, 1, 1]', instead got: '[54, 9, 3, 1, 1]'
Completed in 1ms
 Testing for sqInRect(173, 35)
 Log
173 35
It should work for random inputs too - Expected: '[35, 35, 35, 35, 33, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1]', instead got: '[77, 11, 2, 1]'
 Testing for sqInRect(23, 199)
 Log
23 199
It should work for random inputs too - Expected: '[23, 23, 23, 23, 23, 23, 23, 23, 15, 8, 7, 1, 1, 1, 1, 1, 1, 1]', instead got: '[67, 9, 2, 1, 1, 1]'
 Testing for sqInRect(2, 7)
 Log
2 7
It should work for random inputs too - Expected: '[2, 2, 2, 1, 1]', instead got: '[3, 2, 1]'
 Testing for sqInRect(14, 10)
 Log
14 10
It should work for random inputs too - Expected: '[10, 4, 4, 2, 2]', instead got: '[11, 4, 1, 1, 1]'
 Testing for sqInRect(176, 47)
 Log
176 47
It should work for random inputs too - Expected: '[47, 47, 47, 35, 12, 12, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]', instead got: '[90, 13, 1, 1, 1]'
Completed in 12ms
 STDERR
Unhandled rejection TestError: Expected: 'null', instead got: '[5]'
Unhandled rejection TestError: Expected: 'null', instead got: '[5]'

*/

/*
The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

alternative text

Can you translate this drawing into an algorithm?

You will be given two dimensions

a positive integer length (parameter named lng)
a positive integer width (parameter named wdth)
You will return an array or a string (depending on the language; Shell bash, PowerShell and Fortran return a string) with the size of each of the squares.

  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]
  or (Haskell)
  squaresInRect  5  3 `shouldBe` Just [3,2,1,1]
  squaresInRect  3  5 `shouldBe` Just [3,2,1,1]
  or (Fsharp)
  squaresInRect  5  3 should return Some [3,2,1,1]
  squaresInRect  3  5 should return Some [3,2,1,1]
  or (Swift)
  squaresInRect  5  3 should return [3,2,1,1] as optional
  squaresInRect  3  5 should return [3,2,1,1] as optional
  or (Cpp)
  sqInRect(5, 3) should return {3, 2, 1, 1}
  sqInRect(3, 5) should return {3, 2, 1, 1}
  (C)
  C returns a structure, see the "Solution" and "Examples" tabs.
  Your result and the reference test solution are compared by strings.
Notes:
lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with lng != wdth. (See kata, Square into Squares. Protect trees! http://www.codewars.com/kata/54eb33e5bc1a25440d000891 for this problem).

When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return None/nil/null/Nothing

return {} with C++, Array() with Scala.

In that case the returned structure of C will have its sz component equal to 0.

Return the string "nil" with Bash, PowerShell and Fortran.

You can see more examples in "RUN SAMPLE TESTS". */