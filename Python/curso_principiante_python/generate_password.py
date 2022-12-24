import random


def generate_password():
    UPPER_LETTERS = ['A', 'B', 'C', 'D']
    LOWER_LETTERS = ['a', 'b', 'c', 'd']
    SYMBOLS = ['!', '#', '/', '$']
    NUMBERS = ['1', '2', '3', '4']

    characters = UPPER_LETTERS + LOWER_LETTERS + SYMBOLS + NUMBERS

    password = []

    for i in range(15):
        character_random = random.choice(characters)
        password.append(character_random)

    password = "".join(password)

    return password


def run():
    new_password = generate_password()

    print(f'Your new password is: {new_password}')


if __name__ == '__main__':
    run()
