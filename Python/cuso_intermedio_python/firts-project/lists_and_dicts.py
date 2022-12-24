def run():
    my_list = [1,'Hello', True, 4.5]
    my_dict = {'first_name': 'Angel', 'last_name': 'Archbold'}

    super_list = [
        {'first_name': 'Angel', 'last_name': 'Archbold'},
        {'first_name': 'Angel2', 'last_name': 'Archbold2'},
        {'first_name': 'Angel3', 'last_name': 'Archbold3'},
        {'first_name': 'Angel4', 'last_name': 'Archbold4'},
        {'first_name': 'Angel5', 'last_name': 'Archbold5'}
    ]

    super_dict = {
        'natural_nums': [1,2,3,4,5],
        'integer_nums': [-1,-2,0,1,2],
        'floating_nums': [1.1,2.2,1.5,2.2]
    }

    for item in super_list:
        print(item)

if __name__ == '__main__':
    run()