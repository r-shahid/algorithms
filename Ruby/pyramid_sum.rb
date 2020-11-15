# Write a method pyramid_sum that takes in an array of numbers representing the base of a pyramid. The function should return a 2D array representing a complete pyramid with the given base. To construct a level of the pyramid, we take the sum of adjacent elements of the level below.


def pyramid_sum(base)
  return_arr = []
  return_arr.push(base)

  while base.length > 1 do
    temp_arr = []
    i = 0
    while i < base.length-1
      num = base[i] + base[i+1]
      temp_arr.push(num)
      i += 1
    end
    return_arr.unshift(temp_arr)
    base = temp_arr
    temp_arr = []
  end

  print return_arr

end
pyramid_sum([1,2,3,4,5]) # => [[48], [20, 28], [8, 12, 16], [3, 5, 7, 9], [1, 2, 3, 4, 5]]
