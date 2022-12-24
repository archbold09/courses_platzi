from queue import Empty


types_of_currency = ['USD', 'COP']
type_currency = input('Which is your type of currency USD or COP? : ')


def convertMoney(type_currency, money_value, currency_value):
    quantity_decimals = 0
    conversor = ''

    if type_currency == 'COP':
        conversor = money_value / currency_value
        quantity_decimals = 2
    elif type_currency == 'USD':
        conversor = money_value * currency_value

    conversor = round(conversor, quantity_decimals)
    conversor = str(conversor)

    return conversor


if type_currency in types_of_currency:

    currency_value = 0
    money_value = input('How much money do you have?: ')
    money_value = float(money_value)

    if type_currency == 'USD':
        currency_value = 1
        value_money = convertMoney(type_currency, money_value, currency_value)
        print(f'You have ${value_money} Colombian pesos')
    elif type_currency == 'COP':
        currency_value = 3875
        value_money = convertMoney(type_currency, money_value, currency_value)
        print(f'You have ${value_money} dollars')

else:
    print('This currency is not available.')
