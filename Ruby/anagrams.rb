def anagrams?(word1, word2)
  #take each word, separate by letter --> an array of letters
  #alphabetize each array
  #if two arrays are equal --> true

  arr1 = word1.split('')
  arr2 = word2.split('')

  if arr1.length == arr2.length
    p arr1.map { |i| arr2.include?(i)}.include?(true)
  else 
    p false
  end

end

anagrams?("cat", "act")    
anagrams?("restful", "fluster")
anagrams?("cat", "dog")      
anagrams?("boot", "bootcamp")