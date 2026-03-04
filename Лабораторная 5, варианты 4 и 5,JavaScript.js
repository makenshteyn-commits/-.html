//Вариант 4.
function productBetweenMinMax(arr) {

    if (arr.length <= 1) {
        return 0; 
    }

    let minIndex = 0;
    let maxIndex = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }

    const start = Math.min(minIndex, maxIndex) + 1;
    const end = Math.max(minIndex, maxIndex);

    if (start >= end) {
        return 1; 
    }

    let product = 1;
    for (let i = start; i < end; i++) {
        product *= arr[i];
    }

    return product;
}

//Вариант 5.
function sumNegativeElementsByColumn(matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }

    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const result = new Array(numCols).fill(0);

    for (let j = 0; j < numCols; j++) {
        let columnSum = 0;

        for (let i = 0; i < numRows; i++) {
            if (matrix[i][j] !== undefined && matrix[i][j] < 0) {
                columnSum += matrix[i][j];
            }
        }

        result[j] = columnSum;
    }

    return result;
}
