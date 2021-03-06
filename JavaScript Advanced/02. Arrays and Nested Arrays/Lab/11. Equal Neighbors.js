function solve(matrix) {

    let count = 0;

    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === matrix[i + 1][j]) {
                count++;
            }
        }

        for (let j = 0; j < matrix[i].length - 1; j++) {
            if (matrix[i][j] === matrix[i][j + 1]) {
                count++;
            }
        }
    }

    for (let j = 0; j < matrix[matrix.length - 1].length - 1; j++) {
        if (matrix[matrix.length - 1][j] === matrix[matrix.length - 1][j + 1]) {
            count++;
        }
    }

    return count
}


console.log(solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
))