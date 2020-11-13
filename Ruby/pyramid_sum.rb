# Write a method pyramid_sum that takes in an array of numbers representing the base of a pyramid. The function should return a 2D array representing a complete pyramid with the given base. To construct a level of the pyramid, we take the sum of adjacent elements of the level below.

# # For example, the base [1, 4, 6] gives us the following pyramid
# #     15
# #   5   10
# # 1   4    6
# # @param [nums]
# # @return [[nums]]

# def pyramid_sum(base)
#   # Happy Hacking!
#   #input is numbers in the array
#   #p the sum of all the numbers
#   #
# end

# p pyramid_sum([1, 4, 6]) #=> [[15], [5, 10], [1, 4, 6]]


# p pyramid_sum([3, 7, 2, 11]) #=> [[41], [19, 22], [10, 9, 13], [3, 7, 2, 11]]

def pyramid_sum(base)
  return_arr = []
  return_arr.push(base)

  i=0
  second = []
  while i < base.length-1
    num = base[i]+base[i+1]
    second.push(num)
    i += 1
  end

  return_arr.unshift(second)
  
  $temp_arr=[]
  
  def keep_adding(arr)
    i=0
    while i < arr.length-1
      num = arr[i]+arr[i+1]
      $temp_arr.push(num)
      i += 1
    end
    if arr.length >= 2
      keep_adding(arr)
    end
  end

  return_arr.unshift($temp_arr)

  keep_adding(second)

  print return_arr

end
pyramid_sum([1,3,3,4,5])

# p pyramid_sum([1, 4, 6]) #=> [[15], [5, 10], [1, 4, 6]]


# p pyramid_sum([3, 7, 2, 11]) #=> [[41], [19, 22], [10, 9, 13], [3, 7, 2, 11]]