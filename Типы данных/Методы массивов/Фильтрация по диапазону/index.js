'use strict'

const filterRange = (arr , a, b) => arr.filter(item => (item >= a && item <= b))

let arr = [5, 3, 8, 1]
alert(filterRange(arr, 1, 4))
alert(arr)