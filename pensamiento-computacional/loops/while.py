# while

# count = 0

# while count <= 10:

#     print(count)
#     count += 1

# double while
count1 = 0
count2 = 0
while count1 <= 10:
    while count2 <= 10:
        print(f'count 1: {count1} / count 2: {count2}')
        count2 += 1

        if count2 == 3:
            break
    count1 += 1
    count2 = 0
