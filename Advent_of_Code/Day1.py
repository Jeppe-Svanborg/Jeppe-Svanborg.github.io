# https://adventofcode.com/2020/day/1

lines = []


def load_data(fileName):
    global lines
    with open(fileName, "r") as input_data:
        lines = input_data.readlines()
    for i in range(len(lines)):
        lines[i] = lines[i].strip()

# def problemOne():
#     global lines

#     for aStr in lines:
#         for bStr in lines:
#             a = int(aStr)
#             b = int(bStr)
#             y = a+b
#             if y == 2020:
#                 print(a,b,y, a*b)
#                 return
            

def problemTwo():
    global lines

    for aStr in lines:
        for bStr in lines:
            for cStr in lines:
                a = int(aStr)
                b = int(bStr)
                c = int(cStr)
                y = a+b+c
                if y == 2020:
                 print(a,b,c,y, a*b*c)
                 return
            



load_data("day1-input.txt")
# problemOne()
problemTwo()
