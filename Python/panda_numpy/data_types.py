import numpy as np

list = [1, 2, 3, 4, 5]

arr = np.array(list)
arr.dtype

arr = np.array(arr, dtype='float64')
arr.dtype

array = np.array([0, 1, 2, 3, 4, 5])
array = array.astype(np.bool_)
array

array = np.array([0, 1, 2, 3, 4, 5])
array = array.astype(np.string_)
array

array = np.array(['0', '1', '2', '3', '4', '5'])
array = array.astype(np.int8)
array
