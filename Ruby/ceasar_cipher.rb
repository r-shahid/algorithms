# def rot13
#     alphabet = ('a'..'z').to_a
#     p alphabet[0].next
# end

# def rot13 (string)
  
#   string.tr("ABCDEFGHIJKLMNOPQRSTUVWXYZ","NOPQRSTUVWXYZABCDEFGHIKLM")
# end

# puts rot13("SERR CVMMN")
# puts rot13(rot13("SERR CVMMN"))

def rot13(string)
    value = string.upcase
    puts value
    return value.tr("ABCDEFGHIJKLMNOPQRSTUVWXYZ","NOPQRSTUVWXYZABCDEFGHIKLM")
end

# Use rot13 method.
puts rot13("gandalfia")
puts rot13(rot13("gandalfia"))
