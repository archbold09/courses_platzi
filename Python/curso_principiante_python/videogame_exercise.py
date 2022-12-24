import random


def random_number():
    random_number = random.randint(1, 10)
    return random_number


def run():
    value_number = int(input('Give me a number: '))
    value_random = random_number()

    print(value_random)

    while value_number != value_random:
        if value_random > value_number:
            print('The number is more up')
        elif value_random < value_number:
            print('The number is more below')
        value_number = int(input('Give me a number: '))

    print('Ty bro')


if __name__ == '__main__':
    run()
