// Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
        console.log('---------------');
    }
}

logAllPairsOfArray(boxes); // O(n * n) ==> O(n^2) Quadratic Time

/** ES5 */
function logAllPairsOfBoxes(boxes) {
    boxes.forEach(function (firstBox) {
        boxes.forEach(function (secondBox) {
            console.log(firstBox, secondBox);
        });
        console.log('****** ******');
    });
}

logAllPairsOfBoxes(boxes); // O(n^2)


console.log('== Nested Loop ==')
function compressBoxesTwice(boxes1, boxes2) {
    boxes1.forEach(box1 => {
        boxes2.forEach(box2 => console.log(box1, box2));
        console.log('**********')
    });
}
compressBoxesTwice([1,2,3,4,5], [1,2,3]); // O(n^2)

