# The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

# Base pairs are a pair of AT and CG. Match the missing element to the provided character. Return the provided character as the first element in nested array.

def dna_string(string)
  # loop through each letter
  # each letter gets put in it's own array with its pair
  # print all the arrays
  letters = string.upcase.split('')
  return_arr = []
  letters.each do |i|
    if i == 'G'
      arr = []
      arr.push('G','C')
      return_arr.push(arr)
    elsif i == 'C'
      arr = []
      arr.push('C','G')
      return_arr.push(arr)
    elsif i == 'A'
      arr = []
      arr.push('A','T')
      return_arr.push(arr)
    elsif i == 'T'
      arr = []
      arr.push('T','A')
      return_arr.push(arr)
    end
  end
  p return_arr
end

dna_string('gcat')