
def most_vowels(string)
    str_arr = string.split(" ")
    most_vowel = ' '
    str_arr.each do |word|
        most_vowel = word if most_vowel.count('aeiou') < word.count('aeiou')
    end
    p most_vowel
end

most_vowels("what a wonderful ruby")