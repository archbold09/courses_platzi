

try:
    raise Exception('Sorry, you are banned!')
    print('All its okay')
except NameError:
    print('Var x is not defined')
except:
    print('Error')
    raise
