types_of_currency = ['USD', 'COP']
type_currency = input('Which is your type of currency USD or COP? : ')


if type_currency in types_of_currency:

    currency_value = 0
    money_value = input('How much money do you have?: ')
    money_value = float(money_value)

    if type_currency == 'USD':
        currency_value = 1
        pesos = money_value * currency_value
        pesos = round(pesos, 0)
        pesos = str(pesos)
        print(f'You have ${pesos} Colombian pesos')
    elif type_currency == 'COP':
        currency_value = 3875
        dollars = money_value / currency_value
        dollars = round(dollars, 2)
        dollars = str(dollars)
        print(f'You have ${dollars} dollars')

else:
    print('This currency is not available.')
