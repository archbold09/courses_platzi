def write():
    names = ["Angel", "Archbold", "Torres", "Junior"]
    with open("./files/names.txt", "w", encoding="utf-8") as wf:
            for name in names: 
                wf.write(name)
                wf.write("\n")

                
def read():
    numbers = []
    
    with open("./files/numbers.txt", "r", encoding="utf-8") as rf:
        for line in rf: 
            numbers.append(int(line))

    print(numbers)


def run():
    read()
    write()


if __name__ == '__main__':
    run()