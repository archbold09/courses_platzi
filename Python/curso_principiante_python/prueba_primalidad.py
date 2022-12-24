def is_prime(value_number):
    count = 0
    for i in range(1, value_number+1):
        if i == 1 or i == value_number:
            continue
        if value_number % i == 0:
            count += 1
    if count == 0:
        return True
    else:
        return False


def run():
    value_number = int(input('Write a number: '))
    if is_prime(value_number):
        print('Is a prime number')
    else:
        print('Not is a prime number')


if __name__ == '__main__':
    run()
