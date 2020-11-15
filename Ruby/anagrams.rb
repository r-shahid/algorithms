def anagrams?(word1, word2)

  arr1 = word1.split('')
  arr2 = word2.split('')
    
  counts1 = Hash.new 0
  arr1.each do |i|
    counts1[i] += 1
  end
  # p counts1

  counts2 = Hash.new 0
  arr2.each do |i|
    counts2[i] += 1
  end
  # p counts2

  if counts1 == counts2
    p true
  else 
    p false
  end

end

# anagrams?("cat", "act")    
# anagrams?("restful", "fluster")
# anagrams?("cat", "dog")      
# anagrams?("boot", "bootcamp")
# anagrams?("aeeaae", "eaeea")