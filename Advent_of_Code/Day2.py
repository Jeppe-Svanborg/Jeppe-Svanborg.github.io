lines = []

def load_data(fileName):
    global lines
    with open(fileName, "r") as input_data:
        lines = input_data.readlines()
    for i in range(len(lines)):
        lines[i] = lines[i].strip()

# def problemOne():
#     global lines
#     print (lines)

#     validPassCounter = 0

#     for line in lines:
#         # extract values
#         print(line)
#         parts = line.split(": ")
#         p = parts[1]

#         rules = parts[0]
#         rulesParts = rules.split(" ")
#         l = rulesParts[1]
#         limits = rulesParts[0].split("-")

#         low = int(limits[0])
#         high = int(limits[1])

#         # check if valid

#         if is_valid(p, low, high, l):
#             validPassCounter += 1

#     print (validPassCounter)
#     return validPassCounter

# def is_valid(password, min, max, letter):
#     count = 0
#     for l in password:
#         if letter == l:
#             count += 1
#     return min <= count and count <=max

def problemTwo():
    global lines
    print (lines)

    validPassCounter = 0

    for line in lines:
        # extract values
        print(line)
        parts = line.split(": ")
        p = parts[1]

        rules = parts[0]
        rulesParts = rules.split(" ")
        l = rulesParts[1]
        limits = rulesParts[0].split("-")

        low = int(limits[0])
        high = int(limits[1])

        # check if valid

        if is_valid(p, low, high, l):
            validPassCounter += 1

    print (validPassCounter)
    return validPassCounter

def is_valid(password, min, max, letter):
    count = 0
    for l in password:
        if l 




    for l in password:
        if letter == l:
            count += 1
    return min <= count and count <=max

load_data("day2-input.txt")
# problemOne()
problemTwo()
