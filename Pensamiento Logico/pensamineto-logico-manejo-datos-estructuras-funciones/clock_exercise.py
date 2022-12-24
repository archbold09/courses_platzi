seconds = 0
minutes = 0
hours = 0

while hours < 24:
    while minutes < 60:
        while seconds < 60:
            print(f'Hour: {hours} {minutes} {seconds}')
            seconds += 1
        print(f'Hour: {hours} {minutes} {seconds}')
        minutes += 1
        seconds = 0
    print(f'Hour: {hours} {minutes} {seconds}')
    hours += 1
    minutes = 0
    seconds = 0
