//Вариант 4.
def product_between_min_max(arr):
    if not arr:
        return 0
    
    min_index = arr.index(min(arr))
    max_index = arr.index(max(arr))
    
    start = min(min_index, max_index) + 1
    end = max(min_index, max_index)
    
    product = 1
    for i in range(start, end):
        product *= arr[i]
    
    return product

//Вариант 5.
def sum_negative_columns(matrix):
    if not matrix or not matrix:
        return 
    
    num_cols = len(matrix)
    result =  * num_cols 
    
    for col in range(num_cols):
        for row in range(len(matrix)):
            if matrix[row][col] < 0:
                result[col] += matrix[row][col]
    
    return result
