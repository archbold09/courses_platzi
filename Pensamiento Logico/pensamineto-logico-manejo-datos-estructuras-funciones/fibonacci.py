aux = 0
n1 = 0
n2 = 1


counter = 0
fibonacciNumber = int(input('Fibonacci number: '))
while counter <= fibonacciNumber:
    if(counter == 0):
        print(f'Fibonacci: {n1}')
        counter += 1
    if(counter == 1):
        print(f'Fibonacci: {n2}')
        counter += 1
    else:
        aux = n1 + n2
        n1 = n2
        n2 = aux
        print(f'Fibonacci: {aux}')
        counter += 1
