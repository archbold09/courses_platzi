from cmath import log


def palindrome(word):
    word = word.replace(' ', '')
    word = word.lower()
    word_invert = ''

    # invert_word = word[::-1]
    for item in reversed(word):
        word_invert = word_invert + item

    if word == word_invert:
        return True
    else:
        return False


def run():
    word_value = input('Give me a word :')
    is_palindrome = palindrome(word_value)
    if is_palindrome == True:
        print('Is a palindrome')
    else:
        print('Is not a palindrome')


if __name__ == '__main__':
    run()
