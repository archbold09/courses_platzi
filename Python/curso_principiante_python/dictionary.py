dictionary = {
    'test': 'test'
}

dictionary['newtest'] = 'newTest'

for key, value in dictionary.items():
    value = 'NEW VALUE'

print(dictionary)
